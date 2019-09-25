import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ListingParams } from '../../services/trainer-transphormer/trainer-transphormer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public form: FormGroup;

  @Input()
  public set initialFormValue(value: ListingParams) {
    this.form.setValue(value);
  }

  constructor(public modalCtrl: ModalController) {
    this.form = new FormGroup({
      activeDays: new FormControl(''),
      name: new FormControl(''),
      uploadDays: new FormControl(''),
      haveNotUploadDays: new FormControl(''),
      joinedDays: new FormControl(''),
      customer_for_life: new FormControl(''),
      is_premium: new FormControl(''),
      not_messaged_in: new FormControl(''),
    });
  }

  public close() {
    this.modalCtrl.dismiss();
  }

  public applyFilter() {
    const value: ListingParams = this.form.getRawValue();
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        value[key] = value[key] === null ? '' : value[key];
      }
    }
    // value.customer_for_life = value.customer_for_life === true ? 1 : 0;
    // value.is_premium = value.is_premium === true ? 1 : 0;
    this.modalCtrl.dismiss(value);
  }

  public clear() {
    this.form.setValue({
      activeDays: '',
      uploadDays: '',
      haveNotUploadDays: '',
      joinedDays: '',
      customer_for_life: '',
      is_premium: '',
      not_messaged_in: '',
      name: this.form.get('name').value,
    });
    this.applyFilter();
  }
}
