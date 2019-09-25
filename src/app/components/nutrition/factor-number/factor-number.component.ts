import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum FORMAT_TYPES {
  NUMBER_WITH_DECIMAL = 1,
  ONLY_DECIMAL = 2,
  FRACTION_WITH_NUMBER = 3,
  FRACTION_WITHOUT_NUMBER = 4,
}

@Component({
  selector: 'app-factor-number',
  templateUrl: './factor-number.component.html',
  styleUrls: ['./factor-number.component.scss']
})
export class FactorNumberComponent implements OnInit {

  public originalValue: number;

  @Input()
  public set value(value: number) {
    this.originalValue = value;
    this.format = this.createFormatFromValue(value);
  }

  @Input()
  public disable = false;

  @Output()
  public valueUpdated: EventEmitter<number> = new EventEmitter<number>();

  public format = '';

  private numberWithDecimal = new RegExp('^[0-9]*(\.[0-9][0-9]*)?$');

  private onlyDecimal = new RegExp('^\.[0-9]*$');

  private fractionWithNumbers = new RegExp('^[0-9][0-9]* ([0-9][0-9]*\/[0-9][0-9]*)$');

  // private fractionWithoutNumbers = new RegExp('^([0-9][0-9]*\/[0-9][0-9]*)$'); // @todo need to double check without primary value

  private typeOfFormat: FORMAT_TYPES = FORMAT_TYPES.NUMBER_WITH_DECIMAL;


  constructor() {
  }

  ngOnInit() {
  }

  public setNumericValue($event) {
    const value = this.createValueFromFormat($event.target.value);
    if (value !== false) {
      this.originalValue = <number>value;
      this.valueUpdated.emit(<number>value);
    }

  }

  private createFormatFromValue(value: number): string {
    if (!value) {
      return '';
    }
    switch (this.typeOfFormat) {
      case FORMAT_TYPES.NUMBER_WITH_DECIMAL:
      case FORMAT_TYPES.ONLY_DECIMAL:
        return value.toString();
      case FORMAT_TYPES.FRACTION_WITH_NUMBER:
        const splitValues = value.toString().split('.');
        if (splitValues.length < 2) {
          return '';
        }

        let fraction: string | number = parseFloat(splitValues[1]);
        fraction = `${fraction}${fraction < 10 ? '0' : ''}/${fraction > 100 ? '1000' : '100'}`;

        return `${splitValues[0]} ${fraction}`;

      default:
        return '';
    }
  }

  private createValueFromFormat(format: string): number | boolean {
    if (this.numberWithDecimal.test(format)) {
      this.typeOfFormat = FORMAT_TYPES.NUMBER_WITH_DECIMAL;
      return parseFloat(format);
    }

    if (this.onlyDecimal.test(format)) {
      this.typeOfFormat = FORMAT_TYPES.ONLY_DECIMAL;
      return parseFloat(format);
    }

    if (this.fractionWithNumbers.test(format)) {
      this.typeOfFormat = FORMAT_TYPES.FRACTION_WITH_NUMBER;
      return this.convertToNumberForFractionWithNumber(format);
    }

    this.typeOfFormat = FORMAT_TYPES.NUMBER_WITH_DECIMAL;

    return false;
  }

  private convertToNumberForFractionWithNumber(format: string): number {
    const primarySplit = format.split(' ');

    const primaryNumber = parseFloat(primarySplit[0]);

    const secondarySplit = primarySplit[1].split('/');

    const decimalValues = parseFloat(secondarySplit[0]) / parseFloat(secondarySplit[1]);

    return primaryNumber + decimalValues;
  }

}
