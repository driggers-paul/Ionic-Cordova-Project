import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input()
  public currentValue = 0;

  @Input()
  public goalValue = 0;

  @Input()
  public hideTextBarrierRemaining = 0;

  @Input()
  public hideTextBarrierProgress = 0;

  @Input()
  public dangerColor = '';

  private progressColor = '#1fb2d2';

  constructor(
    private element: ElementRef<HTMLElement>
  ) {
  }

  ngOnInit() {
  }

  public get percentage(): number {
    const percentage = (this.currentValue / this.goalValue) * 100;
    return percentage > 100 ? 100 : percentage;
  }

  public get remainingValue(): number {
    return this.goalValue - this.currentValue;
  }

  public get changeBarColor(): string {
    const root: any = this.element.nativeElement.querySelector('.progress');
    root.style.setProperty('--triangle-color', this.dangerColor);
    if (this.percentage >= 100) {
      return this.dangerColor;
    } else {
      root.style.setProperty('--triangle-color', this.progressColor);
    }
  }

  public get overlay(): number {
    if (this.currentValue >= this.goalValue) {
      return -100;
    }
  }

}
