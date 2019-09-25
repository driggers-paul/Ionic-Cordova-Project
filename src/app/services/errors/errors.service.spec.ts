import { TestBed, inject } from '@angular/core/testing';
import { ErrorsService } from './errors.service';
import { FormControl, Validators } from '@angular/forms';

describe('ErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsService]
    });
  });

  it('should be created', inject([ErrorsService], (service: ErrorsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return dark when item is invalid and not dirty', inject([ErrorsService], (service: ErrorsService) => {
    const item = new FormControl('', [Validators.required]);

    expect(service.stateColor(item)).toBe('dark');
  }));

  it('should return danger when item is invalid and dirty', inject([ErrorsService], (service: ErrorsService) => {
    const item = new FormControl('', [Validators.required]);
    item.markAsDirty();
    expect(service.stateColor(item)).toBe('danger');
  }));

  it('should return dark when item is valid', inject([ErrorsService], (service: ErrorsService) => {
    const item = new FormControl('', [Validators.required]);
    item.setValue('valid');
    expect(service.stateColor(item)).toBe('dark');
  }));

  it('should return true when there is error for key', inject([ErrorsService], (service: ErrorsService) => {
    // const errorObj = <ErrorList>{
    //   key: ['Error']
    // };
    // expect(service.keyHasError('key', errorObj)).toBeTruthy('Error was not empty but found to be so');
  }));

  it('should return false when there is no error for key', inject([ErrorsService], (service: ErrorsService) => {
    // const errorObj = <ErrorList>{
    //   key: []
    // };
    // expect(service.keyHasError('key', errorObj)).toBeTruthy('Error was empty with [] but was test failed');
    // expect(service.keyHasError('non existent', errorObj)).toBeTruthy('Error did not have key but was test failed');
  }));
});
