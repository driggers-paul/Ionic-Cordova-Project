import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomMacro, CustomMacroService } from '../../../services/custom-macro/custom-macro.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { RequestCachingService } from '../../../services/interceptors/caching/request-caching.service';
import { ToastService } from '../../../services/toast-service/toast-service.service';
import { ErrorsService } from '../../../services/errors/errors.service';

const DID_YOU_KNOW_SHOW_SETTING_KEY = 'didYouKnow';

@Component({
  selector: 'app-custom-macros',
  templateUrl: './custom-macros.component.html',
  styleUrls: ['./custom-macros.component.scss'],
})
export class CustomMacrosComponent implements OnInit {

  @Input()
  public originalMacro = {
    calories: 0,
    fats: 0,
    protein: 0,
    carbs: 0,
  };

  /**
   * The form group
   */
  public form: FormGroup;

  /**
   * Whether the macro is being used is original or custom
   */
  public isOriginal = true;

  /**
   * List of previous custom macro setting
   */
  public customMacros: CustomMacro[] = [];

  /**
   * Current Active Custom Macro
   */
  private activeMacro: CustomMacro = null;

  /**
   * Today's date
   */
  public today = moment();

  /**
   * Flag to show "did you know" content
   */
  public showDidYouKnow = false;

  /**
   * Show history as expanded value
   */
  public showHistory = false;

  /**
   * Show complete history list
   */
  public showMoreHistory = false;

  public showMoreHistoryOffset = 3;

  constructor(
    public modal: ModalController,
    public customMacroService: CustomMacroService,
    public cacheService: RequestCachingService,
    public loadingCtrl: LoadingController,
    public toastService: ToastService,
    public errorService: ErrorsService
  ) {
    const showYouKnowStorage = JSON.parse(window.localStorage.getItem(DID_YOU_KNOW_SHOW_SETTING_KEY));
    this.showDidYouKnow = showYouKnowStorage === true || showYouKnowStorage === undefined || showYouKnowStorage === null;
  }

  ngOnInit() {
    this.setupForm();
    this.setupHistory();
  }

  /**
   * Setup listing of all custom macros
   */
  public async setupHistory() {
    try {
      this.customMacros = <CustomMacro[]>await this.customMacroService.history();
      if (this.customMacros.length > 0) {
        this.setActiveMacro(this.customMacros[0]);
      }
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    }
  }

  /**
   * Setup form with values
   */
  private setupForm() {
    if (this.form) {
      return;
    }

    this.form = new FormGroup({
      calories: new FormControl({value: this.originalMacro.calories, disabled: true}),
      fats: new FormControl(this.originalMacro.fats, [Validators.required, Validators.min(0)]),
      carbs: new FormControl(this.originalMacro.carbs, [Validators.required, Validators.min(0)]),
      protein: new FormControl(this.originalMacro.protein, [Validators.required, Validators.min(0)])
    });

    this.form.disable();

    /**
     * handling value change for setting calories
     */
    this.form.valueChanges.subscribe(form => {
      // if original macro values are to be used
      if (this.isOriginal) {
        this.form.get('calories').setValue(this.originalMacro.calories, {
          emitEvent: false
        });
        this.form.get('calories').markAsPristine();
      } else if (this.form.valid) {
        const {carbs, fats, protein} = this.form.getRawValue();
        this.form.get('calories').setValue(this.calculateCustomCalories(carbs, fats, protein), {
          emitEvent: false
        });
        if (fats === this.originalMacro.fats && carbs === this.originalMacro.carbs && protein === this.originalMacro.protein) {
          this.form.markAsPristine();
        }
      }
    });
  }

  /**
   * Close the modal
   */
  public close() {
    this.modal.dismiss(this.activeMacro);
  }

  /**
   * Change form default macro usage to creating custom macro
   */
  public setEditMode() {
    this.isOriginal = false;
    this.form.enable();
    this.form.get('calories').disable();
  }

  /**
   * Calculation for calories for custom macro
   *
   * @param carbs
   * @param fats
   * @param protein
   */
  public calculateCustomCalories(carbs, fats, protein): number {
    return 4 * protein + 4 * carbs + 9 * fats;
  }

  /**
   * Revert to original calculated macro values
   */
  public revertToOriginal() {
    this.isOriginal = true;
    this.form.setValue(this.originalMacro, {
      emitEvent: false
    });

    // if current active record is for today
    if (this.isActiveRecordForToday) {
      this.updateActiveMacro();

    } else {
      this.form.disable();
      if (this.customMacros.length > 0) {
        this.createCustomMacro(this.today.format('YYYY-MM-DD'));
      }
    }
  }

  /**
   * Save the custom macro
   */
  public async saveCustomMacroSetting() {

    // if custom macro is for same date then updating the existing else creating new
    if (this.isActiveRecordForToday) {
      this.updateActiveMacro();
    } else {
      this.createCustomMacro(this.today.format('YYYY-MM-DD'));
    }
  }

  /**
   * Creates new macro record
   * @param date
   */
  public async createCustomMacro(date) {
    try {
      const form = this.form.getRawValue();
      const macro = <CustomMacro>await this.customMacroService.create(this.isOriginal, form.protein, form.carbs, form.fats, date);

      this.customMacros.push(macro);
      this.setActiveMacro(macro);
      this.sortMacros();

      this.cacheService.clearKey(CustomMacroService.Url('nutritions/custom-macros'), 'GET');
      this.toastService.flash('Your custom macros have been saved.');
      this.close();
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    }
  }

  /**
   * Updating active macro value
   */
  public async updateActiveMacro() {
    try {
      const form = this.form.getRawValue();
      const macro = <CustomMacro>await this.customMacroService.update(
        this.activeMacro.id, this.isOriginal, form.protein, form.carbs, form.fats
      );
      const macroIndex = this.customMacros.findIndex(customMacro => customMacro.id === macro.id);
      this.customMacros[macroIndex] = macro;
      this.setActiveMacro(macro);
      this.sortMacros();

      this.cacheService.clearKey(CustomMacroService.Url('nutritions/custom-macros'), 'GET');
      this.toastService.flash('Your custom macros have been saved.');
      this.close();
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    }
  }

  /**
   * Sets the current active macro
   * @param macro
   */
  public setActiveMacro(macro: CustomMacro) {
    this.activeMacro = macro;
    this.isOriginal = this.activeMacro.reset_to_original;
    if (this.isOriginal) {
      this.form.disable();
      this.form.setValue(this.originalMacro, {
        emitEvent: false
      });

    } else {
      this.form.enable();
      this.form.get('calories').disable();
      this.form.setValue({
        calories: macro.calories,
        fats: macro.fats,
        carbs: macro.carbs,
        protein: macro.protein,
      });
    }
    this.form.markAsPristine();
  }

  /**
   * Returns true if the active custom macro record is for today
   */
  public get isActiveRecordForToday(): boolean {
    if (!this.activeMacro) {
      return false;
    }

    this.today.set('h', 0).set('minute', 0).set('second', 0);
    (this.activeMacro.edit_date as Moment).set('h', 0).set('minute', 0).set('second', 0);

    return this.today.unix() === (this.activeMacro.edit_date as Moment).unix();
  }

  /**
   * Sort the macros based on edit date with latest date at the top
   */
  public sortMacros() {
    this.customMacros = this.customMacros.sort((macro1, macro2) => {
      return (macro1.edit_date as Moment).isSameOrAfter((macro2.edit_date as Moment)) ? -1 : 1;
    });
  }

  public setDidYouKnow() {
    this.showDidYouKnow = false;
    window.localStorage.setItem(DID_YOU_KNOW_SHOW_SETTING_KEY, 'false');
  }

  public hide() {
    this.showDidYouKnow = false;
  }

  /**
   * Returns current active macro or null if none is set
   */
  public getActiveMacro(): CustomMacro | null {
    return this.activeMacro;
  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();
    this.close();
  }

}
