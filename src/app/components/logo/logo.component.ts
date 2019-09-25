import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public get src(): string {
    return `${environment.assetsFolder}assets/icon/logo.png`;
  }

}
