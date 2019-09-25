import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meal-template-name',
  templateUrl: './meal-template-name.component.html',
  styleUrls: ['./meal-template-name.component.scss'],
})
export class MealTemplateNameComponent implements OnInit {

  public form: FormGroup;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)])
    });
  }

  public save() {
    this.modalController.dismiss(this.form.get('name').value);
  }

  public close() {
    this.modalController.dismiss(false);
  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();
    this.close();
  }
}
