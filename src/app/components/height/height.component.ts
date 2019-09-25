import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerColumnOption } from '@ionic/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.scss'],
})
export class HeightComponent implements OnInit {
  @Input()
  public height = 0;

  @Output()
  public heightChange: EventEmitter<number> = new EventEmitter<number>();

  private getOptions() {
    const feetOptions = [
      {
        text: '3\'',
        value: 3,
      },
      {
        text: '4\'',
        value: 4,
      },
      {
        text: '5\'',
        value: 5,
      },
      {
        text: '6\'',
        value: 6,
      },
      {
        text: '7\'',
        value: 7,
      },
    ];
    const inchOptions = [
      {
        text: '0"',
        value: 0,
      },
      {
        text: '1"',
        value: 1,
      },
      {
        text: '2"',
        value: 2,
      },
      {
        text: '3"',
        value: 3,
      },
      {
        text: '4"',
        value: 4,
      },
      {
        text: '5"',
        value: 5,
      },
      {
        text: '6"',
        value: 6,
      },
      {
        text: '7"',
        value: 7,
      },
      {
        text: '8"',
        value: 8,
      },
      {
        text: '9"',
        value: 9,
      },
      {
        text: '10"',
        value: 10,
      },
      {
        text: '11"',
        value: 11,
      },
    ];
    return { feetOptions, inchOptions };
  }

  constructor(public pickerCtrl: PickerController) {}

  ngOnInit() {}

  public async openPicker() {
    const height = this.heightInFeet;
    const { feetOptions, inchOptions } = this.getOptions();
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: 'Update',
          handler: e => {
            this.heightChange.emit(
              this.feetToInches(e.feet.value, e.inches.value)
            );
            picker.remove();
          },
        },
        {
          text: 'Cancel',
        },
      ],
      columns: [
        {
          name: 'feet',
          selectedIndex: this.getSelectedIndex(height.feet, feetOptions) || 0,
          options: feetOptions,
        },
        {
          name: 'inches',
          selectedIndex: this.getSelectedIndex(height.inches, inchOptions) || 0,
          options: inchOptions,
        },
      ],
    });
    await picker.present();
  }

  public get heightInFeet(): { feet: number; inches: number } {
    const feet = Math.floor(this.height / 12);
    const inches = this.height % 12;
    return { feet, inches };
  }

  private getSelectedIndex(value, list: PickerColumnOption[]): number {
    return list.findIndex(option => option.value === value);
  }

  private feetToInches(feet, inches): number {
    feet = feet * 12;
    return feet + inches;
  }

  public get heightValue(): string {
    return `${this.heightInFeet.feet}' ${this.heightInFeet.inches}"`;
  }
}
