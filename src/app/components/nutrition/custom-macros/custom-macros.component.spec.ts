import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CustomMacrosComponent } from './custom-macros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule, LoadingController, ModalController } from '@ionic/angular';
import { CustomMacro } from '../../../services/custom-macro/custom-macro.service';
import * as moment from 'moment';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastService } from '../../../services/toast-service/toast-service.service';

class LoadingControllerMock {
  create(obj: any) {
    return {
      present() {
      },
      dismiss() {
      }
    };
  }
}

class ModalControllerMock {
  dismiss(data?: any) {
  }
}

class ToastServiceMock {
  public async flash(opts, duration?: number) {}
}

describe('CustomMacrosComponent', () => {
  let component: CustomMacrosComponent;
  let fixture: ComponentFixture<CustomMacrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMacrosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, IonicModule, RouterTestingModule],
      providers: [
        {provide: LoadingController, useClass: LoadingControllerMock},
        {provide: ModalController, useClass: ModalControllerMock},
        {provide: ToastService, useClass: ToastServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch listing of empty custom macros', fakeAsync(() => {
    // const fetchListingSpy = spyOn(component.customMacroService, 'history').and.returnValue([]);
    component.ngOnInit();

    tick(10);
    expect(component.customMacroService.history).toHaveBeenCalled();
    expect(component.customMacros).toEqual([]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.history')).toBeFalsy();
  }));

  it('should fetch listing of previous custom macros', fakeAsync(() => {
    const customMacros: CustomMacro[] = [{
      id: 1,
      transphormer_id: 1,
      calories: 100,
      protein: 100,
      fats: 100,
      carbs: 100,
      edit_date: moment(),
      reset_to_original: false
    }];

    // const fetchListingSpy = spyOn(component.customMacroService, 'history').and.returnValue(customMacros);
    component.ngOnInit();

    tick(10);
    expect(component.customMacroService.history).toHaveBeenCalled();
    expect(component.customMacros).toEqual(customMacros);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.history')).toBeTruthy();
  }));

  it('should return correct calories value', fakeAsync(() => {
    expect(component.calculateCustomCalories(100, 100, 100)).toEqual(1700);
  }));

  it('should enable form for editing if set for edit mode', fakeAsync(() => {
    spyOn(component.customMacroService, 'history').and.returnValue([]);
    component.setEditMode();

    fixture.detectChanges();

    expect(component.isOriginal).toBe(false);
    expect(component.form.get('calories').enabled).toBe(false);

    expect(fixture.nativeElement.querySelector('.custom-actions')).toBeTruthy();
  }));

  it('should revert to default mode when case is is no active macro', fakeAsync(() => {
    spyOn(component.customMacroService, 'history').and.returnValue([]);
    component.ngOnInit();
    component.revertToOriginal();

    fixture.detectChanges();

    expect(component.isOriginal).toBe(true);
    expect(component.form.enabled).toBe(false);

    expect(fixture.nativeElement.querySelector('.custom-actions')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('.edit-action')).toBeTruthy();
  }));

  it('should be in edit mode if latest custom macro is not for default macro', fakeAsync(() => {
    const data: CustomMacro = {
      id: 1,
      transphormer_id: 1,
      reset_to_original: false,
      carbs: 100,
      calories: 1700,
      protein: 100,
      fats: 100,
      edit_date: moment()
    };
    spyOn(component.customMacroService, 'history').and.returnValue([data]);
    component.ngOnInit();

    tick(10);
    fixture.detectChanges();

    expect(component.isOriginal).toBe(false);
    expect(component.form.get('calories').enabled).toBe(false);
    expect(component.form.getRawValue()).toEqual({
      carbs: 100,
      protein: 100,
      fats: 100,
      calories: 1700
    });
    expect(component.getActiveMacro()).toEqual(data);

    expect(fixture.nativeElement.querySelector('.custom-actions')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.edit-action')).toBeFalsy();
  }));

  it('should be in edit mode if latest custom macro is for default macro', fakeAsync(() => {
    const data: CustomMacro = {
      id: 1,
      transphormer_id: 1,
      reset_to_original: true,
      carbs: 100,
      calories: 1700,
      protein: 100,
      fats: 100,
      edit_date: moment()
    };

    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    spyOn(component.customMacroService, 'history').and.returnValue([data]);
    component.ngOnInit();

    tick(10);
    fixture.detectChanges();

    expect(component.isOriginal).toBe(true);
    expect(component.form.enabled).toBe(false);
    expect(component.form.getRawValue()).toEqual(component.originalMacro);
    expect(component.getActiveMacro()).toEqual(data);

    expect(fixture.nativeElement.querySelector('.custom-actions')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('.edit-action')).toBeTruthy();
  }));

  it('should create new macro if no existing macro is found when saving', fakeAsync(() => {
    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    const newMacro: CustomMacro = {
      id: 1,
      carbs: 200,
      protein: 200,
      calories: 3400,
      fats: 200,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment().format('YYYY-MM-DD')
    };

    spyOn(component.customMacroService, 'history').and.returnValue([]);
    const createAction = spyOn(component.customMacroService, 'create').and.returnValue(newMacro);
    component.ngOnInit();

    tick(10);
    component.isOriginal = false;
    component.form.setValue({
      carbs: newMacro.carbs,
      protein: newMacro.protein,
      fats: newMacro.fats,
      calories: newMacro.calories,
    }, {emitEvent: false});

    component.saveCustomMacroSetting();
    tick(10);

    expect(createAction).toHaveBeenCalledWith(
      component.isOriginal, newMacro.protein, newMacro.carbs, newMacro.fats, component.today.format('YYYY-MM-DD')
    );
    expect(component.customMacros).toEqual([newMacro]);
    expect(component.getActiveMacro()).toEqual(newMacro);
  }));

  it('should update existing macro if active macro is for same date', fakeAsync(() => {
    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    const existingMacro: CustomMacro = {
      id: 1,
      carbs: 200,
      protein: 200,
      calories: 3400,
      fats: 200,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment()
    };

    spyOn(component.customMacroService, 'history').and.returnValue([existingMacro]);
    const updateAction = spyOn(component.customMacroService, 'update').and.returnValue(existingMacro);
    component.ngOnInit();

    tick(10);

    component.isOriginal = false;
    component.saveCustomMacroSetting();

    tick(10);

    expect(updateAction).toHaveBeenCalledWith(
      existingMacro.id, component.isOriginal, existingMacro.protein,
      existingMacro.carbs, existingMacro.fats
    );
    expect(component.customMacros).toEqual([existingMacro]);
    expect(component.getActiveMacro()).toEqual(existingMacro);
  }));

  it('should update existing macro if active macro is for same date while reverting to suggested', fakeAsync(() => {
    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    const existingMacro: CustomMacro = {
      id: 1,
      carbs: 200,
      protein: 200,
      calories: 3400,
      fats: 200,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment()
    };

    const updatedMacro: CustomMacro = {
      id: 1,
      transphormer_id: 1,
      reset_to_original: true,
      edit_date: moment(),
      calories: component.originalMacro.calories,
      fats: component.originalMacro.fats,
      protein: component.originalMacro.protein,
      carbs: component.originalMacro.carbs,
    };

    spyOn(component.customMacroService, 'history').and.returnValue([existingMacro]);
    const updateAction = spyOn(component.customMacroService, 'update').and.returnValue(updatedMacro);
    component.ngOnInit();

    tick(10);

    component.isOriginal = true;
    component.revertToOriginal();

    tick(10);

    expect(updateAction).toHaveBeenCalledWith(
      existingMacro.id, component.isOriginal, updatedMacro.protein,
      updatedMacro.carbs, updatedMacro.fats
    );
    expect(component.customMacros).toEqual([updatedMacro]);
    expect(component.getActiveMacro()).toEqual(updatedMacro);
  }));

  it('should create new macro if active macro is for not same date when updating', fakeAsync(() => {
    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    const existingMacro: CustomMacro = {
      id: 1,
      carbs: 200,
      protein: 200,
      calories: 3400,
      fats: 200,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment().subtract(10, 'day')
    };

    const updatedMacro: CustomMacro = {
      id: 1,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment(),
      calories: existingMacro.calories,
      fats: existingMacro.fats,
      protein: existingMacro.protein,
      carbs: existingMacro.carbs,
    };

    spyOn(component.customMacroService, 'history').and.returnValue([existingMacro]);
    const createAction = spyOn(component.customMacroService, 'create').and.returnValue(updatedMacro);
    component.ngOnInit();

    tick(10);

    component.saveCustomMacroSetting();

    tick(10);

    expect(createAction).toHaveBeenCalledWith(
      component.isOriginal, updatedMacro.protein,
      updatedMacro.carbs, updatedMacro.fats, component.today.format('YYYY-MM-DD')
    );
    expect(component.customMacros).toEqual([updatedMacro, existingMacro]);
    expect(component.getActiveMacro()).toEqual(updatedMacro);
  }));

  it('should create new macro if active macro is for not for same date while reverting to suggested', fakeAsync(() => {
    component.originalMacro = {
      calories: 1700,
      carbs: 100,
      fats: 100,
      protein: 100,
    };

    const existingMacro: CustomMacro = {
      id: 1,
      carbs: 200,
      protein: 200,
      calories: 3400,
      fats: 200,
      transphormer_id: 1,
      reset_to_original: false,
      edit_date: moment().subtract(10, 'day')
    };

    const updatedMacro: CustomMacro = {
      id: 1,
      transphormer_id: 1,
      reset_to_original: true,
      edit_date: moment(),
      calories: component.originalMacro.calories,
      fats: component.originalMacro.fats,
      protein: component.originalMacro.protein,
      carbs: component.originalMacro.carbs,
    };

    spyOn(component.customMacroService, 'history').and.returnValue([existingMacro]);
    const createAction = spyOn(component.customMacroService, 'create').and.returnValue(updatedMacro);
    component.ngOnInit();

    tick(10);
    component.revertToOriginal();

    tick(10);

    expect(createAction).toHaveBeenCalledWith(
      component.isOriginal, updatedMacro.protein,
      updatedMacro.carbs, updatedMacro.fats, component.today.format('YYYY-MM-DD')
    );
    expect(component.customMacros).toEqual([updatedMacro, existingMacro]);
    expect(component.getActiveMacro()).toEqual(updatedMacro);
  }));
});


