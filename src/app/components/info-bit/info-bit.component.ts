import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bit',
  templateUrl: './info-bit.component.html',
  styleUrls: ['./info-bit.component.scss'],
})
export class InfoBitComponent implements OnInit {

  @Input() top: string | number;
  @Input() middle: string | number;
  @Input() bottom: string | number;
  @Input() size = '';

  constructor() {
  }

  ngOnInit() {
  }

  public get extraClass() {
    return [this.size];
  }
}


