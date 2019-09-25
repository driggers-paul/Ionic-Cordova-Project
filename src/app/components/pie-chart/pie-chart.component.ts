import {
  Component,
  ElementRef,
  ViewChild,
  OnChanges,
  Input
} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @ViewChild('canvas')
  public canvasElement: ElementRef;

  @Input()
  public protien = 0;

  @Input()
  public fat = 0;

  @Input()
  public carbs = 0;

  @Input()
  public proteinColor = '#FF8000';

  @Input()
  public carbsColor = '#32B857';

  @Input()
  public fatColor = '#F84FA7';

  constructor() {
  }

  ngOnChanges() {
    this.setUpChart();
  }

  public setUpChart() {
    const ctx = this.canvasElement.nativeElement.getContext('2d');
    const value = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [this.protien, this.fat, this.carbs],
            backgroundColor: [this.proteinColor, this.fatColor, this.carbsColor]
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 1,
        layout: {
          padding: 0
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }
}
