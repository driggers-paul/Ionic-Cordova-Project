import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.scss'],
})
export class MacroComponent implements OnInit {

  @Input()
  public macroValue: number | string = '?';

  @Input()
  public macroType: 'calories' | 'protein' | 'carbs' | 'fats' = 'calories';

  @Input()
  public goal = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public get percentage(): number {

    if (<any>this.macroValue instanceof String) {
      return 0;
    }

    return (<number>this.macroValue / this.goal) * 100;
  }

}
