import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

type StateColors = 'dark' | 'danger' | 'warning';

export interface ErrorFormat {
  status: number;
  list: ErrorList;
}

export interface ErrorList {
  [key: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() {
  }

  // noinspection JSMethodCanBeStatic
  public stateColor(item: FormControl | AbstractControl): StateColors {
    if (item.invalid && !item.dirty) {
      return 'dark';
    } else if (item.invalid) {
      return 'danger';
    } else {
      return 'dark';
    }
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Returns the first error key with first value in the error object
   * @param errors
   * @return string
   */
  public firstError(errors: ErrorFormat): string {
    if (!this.checkIsCorrectStructure(errors)) {
      return '';
    }

    const keys = Object.keys(errors.list);
    return errors.list[keys[0]][0];
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Returns the errors for the key
   * @param key
   * @param errors
   */
  public errorForKey(key: string, errors: ErrorFormat): string[] {
    if (!this.checkIsCorrectStructure(errors)) {
      return [];
    }
    if (errors.list.hasOwnProperty(key)) {
      return errors.list[key];
    }

    return [];
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Returns the first error value for the given key
   * @param key
   * @param errors
   */
  public firstErrorForKey(key: string, errors: ErrorFormat): string {
    if (!this.checkIsCorrectStructure(errors)) {
      return '';
    }

    if (errors.list.hasOwnProperty(key)) {
      if (errors.list[key].length > 0) {
        return errors.list[key][0];
      }
    }

    return '';
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Checks whether the given key has any errors
   * @param key
   * @param errors
   */
  public keyHasError(key: string, errors: ErrorFormat): boolean {

    if (!this.checkIsCorrectStructure(errors)) {
      return false;
    }

    if (errors.list.hasOwnProperty(key)) {
      return errors.list[key].length > 0;
    }

    return false;
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Checks whether the given key has any errors
   * @param errors
   */
  public hasError(errors: ErrorFormat): boolean {

    if (!this.checkIsCorrectStructure(errors)) {
      return false;
    }

    for (const key in errors.list) {
      if (errors.list[key].length > 0) {
        return true;
      }
    }

    return false;
  }

  /**
   * Returns the error status value
   * @param errors
   */
  public status(errors: ErrorFormat): number {
    if (!this.checkIsCorrectStructure(errors)) {
      return -1;
    }
    return errors.status;
  }

  public checkIsCorrectStructure(error: any | ErrorFormat, throwException: boolean = true): boolean {
    const isCorrect = !(!error.hasOwnProperty('status') || !error.hasOwnProperty('list'));

    if (throwException && isCorrect === false) {
      throw error;
    }

    return isCorrect;
  }
}
