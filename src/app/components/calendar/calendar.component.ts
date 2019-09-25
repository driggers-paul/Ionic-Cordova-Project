import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('dtInput')
  public dtInput: ElementRef;

  public today = moment();

  @Output()
  public dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  @Input()
  public dateTime = moment();

  @Input()
  public maxDate;

  @Input()
  public format = 'YYYY/MM/DD';

  @Input()
  public minDate;

  constructor() {
  }

  ngOnInit() {
    this.today = (this.today || moment()).set('seconds', 0).set('hours', 0).set('minutes', 0);
    this.dateTime = (this.dateTime || moment()).set('seconds', 0).set('hours', 0).set('minutes', 0);
    if (this.maxDate) {
      this.maxDate = this.maxDate.set('seconds', 0).set('hours', 0).set('minutes', 0);
    }
    if (this.minDate) {
      this.minDate = this.minDate.set('seconds', 0).set('hours', 0).set('minutes', 0);
    }
  }

  public openCalendar() {
    this.dtInput.nativeElement.click();
  }

  public dateChanged() {
    this.dateChange.emit(this.dateTime.toDate());
  }

  public subDay() {
    this.dateTime.subtract(1, 'day');
    this.dateChanged();
  }

  public addDay() {
    this.dateTime.add(1, 'day');
    this.dateChanged();
  }

  public get currentDay(): boolean {
    const todayTime = moment(this.today).format('YYYY-MM-DD');
    const dateTimeValue = moment(this.dateTime).format('YYYY-MM-DD');
    return moment(todayTime).isSame(dateTimeValue);
  }

  public get isMaxDate(): boolean {
    if (!this.maxDate) {
      return false;
    }
    const maxDate = moment(this.maxDate).format('YYYY-MM-DD');
    const dateTimeValue = moment(this.dateTime).format('YYYY-MM-DD');
    return moment(maxDate).isSame(dateTimeValue);
  }

  public get isMinDate(): boolean {
    if (!this.minDate) {
      return false;
    }
    const minDate = moment(this.minDate).format('YYYY-MM-DD');
    const dateTimeValue = moment(this.dateTime).format('YYYY-MM-DD');
    return moment(minDate).isSame(dateTimeValue);
  }

}
