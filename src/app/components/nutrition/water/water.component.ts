import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit {

  @Input()
  public currentValue = 0;

  @Input()
  public totalValue = 0;

  @Input()
  public barColor = 'blue';

  @Input()
  public dangerColor = 'red';

  @Output()
  public waterSelected: EventEmitter<number> = new EventEmitter<number>();

  // private waterPicker: PickerColumnOption[] = [];

  constructor(
    private pickerCtrl: PickerController
  ) {
  }

  ngOnInit() {
    this.createWaterOptions();
  }

  public get percentage(): number {
    return (this.currentValue / this.totalValue) * 100;
  }

  public get changeBarColor(): string {
    if (this.percentage >= 100) {
      return this.dangerColor;
    }
  }

  private createWaterOptions() {
    const opts = [];
    for (let i = 4; i <= 40; i = i + 2) {
      opts.push({
        text: `${i} oz`,
        value: i
      });
    }
    return opts;
  }

  public async addWater() {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: 'Add',
          handler: (e) => {
            this.waterSelected.emit(e.water.value);
          }
        },
        {
          text: 'Cancel'
        }
      ],
      columns: [{
        name: 'water',
        options: this.createWaterOptions(),
      }]
    });

    picker.present();
  }
}
