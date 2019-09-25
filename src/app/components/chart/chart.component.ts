import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { Moment } from 'moment';
import { Weight } from '../../services/weights/weights.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input()
  public weights: Weight[] = [];

  @ViewChild('canvas')
  public canvas: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setupChart();
  }

  private setupChart() {
    const labels = this.createLabels();
    const chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Weight Logs',
          backgroundColor: 'rgba(48, 145, 194, .15)',
          borderColor: 'rgba(48, 145, 194, .9)',
          data: this.createWeightLogs()
        }]
      }
    });
  }

  private createLabels() {
    return this.weights.map(weight => (<Moment>weight.logged_on).format('M/D/YY')).reverse();
  }

  private createWeightLogs() {
    return this.weights.map(weight => weight.weight).reverse();
  }

}
