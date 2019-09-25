import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMenuComponent } from './bottom-menu.component';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message/message.service';
import { Transphormer } from '../../services/authentication/authentication.service';
import { MessageMock, ModalMock, NavMock } from '../../mocks';

describe('BottomMenuComponent', () => {
  let component: BottomMenuComponent;
  let fixture: ComponentFixture<BottomMenuComponent>;

  function init() {
    TestBed.configureTestingModule({
      imports: [IonicModule, CommonModule],
      declarations: [BottomMenuComponent],
      providers: [
        {provide: ModalController, useClass: ModalMock},
        {provide: NavController, useClass: NavMock},
        {provide: MessageService, useClass: MessageMock}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BottomMenuComponent);
    component = fixture.componentInstance;
  }

  it('should create', () => {
    init();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const user = <Transphormer>{id: 1, likely_to_do: 'Macro meal plan', is_trainer: false, is_paid_user: false};
    component.user = user;
    fixture.detectChanges();
    expect(component.user).toBe(user);
  });

  it('should go to workouts', () => {
    init();
    component.user = <Transphormer>{is_paid_user: false, is_trainer: false};
    fixture.detectChanges();
    const navControl = fixture.debugElement.injector.get(NavController);
    spyOn(navControl, 'navigateForward');
    component.goToWorkouts();
    expect(navControl.navigateForward).toHaveBeenCalledWith('workouts');
  });

  it('should show premium alert if user is free', () => {
    init();
    component.user = <Transphormer>{is_paid_user: false, is_trainer: false};
    spyOn(component, 'premiumAlert');
    fixture.detectChanges();
    component.goToMessages();
    expect(component.premiumAlert).toHaveBeenCalledWith('Advisor messaging');
  });

  it('should show redirect to messages if regular user', () => {
    init();
    component.user = <Transphormer>{is_paid_user: true, is_trainer: false, likely_to_do: 'Calorie / Macro counting'};
    spyOn(component, 'premiumAlert');
    const navControl = fixture.debugElement.injector.get(NavController);
    spyOn(navControl, 'navigateForward');
    fixture.detectChanges();
    component.goToMessages();
    expect(component.premiumAlert).toHaveBeenCalledTimes(0);
    expect(navControl.navigateForward).toHaveBeenCalledWith('messages');
    component.goToNutrition();
    expect(component.premiumAlert).toHaveBeenCalledTimes(0);
    expect(navControl.navigateForward).toHaveBeenCalledWith('macro');
  });

  it('should show redirect to messages if regular user', () => {
    init();
    component.user = <Transphormer>{is_paid_user: false, is_trainer: false, likely_to_do: 'Calorie / Macro counting'};
    spyOn(component, 'premiumAlert');
    const navControl = fixture.debugElement.injector.get(NavController);
    spyOn(navControl, 'navigateForward');
    fixture.detectChanges();
    component.goToNutrition();
    expect(navControl.navigateForward).toHaveBeenCalledWith('nutrition');
  });

  it('should work for advisors', () => {
    init();
    component.user = <Transphormer>{is_paid_user: true, is_trainer: true};
    spyOn(component, 'premiumAlert');
    const navControl = fixture.debugElement.injector.get(NavController);
    spyOn(navControl, 'navigateForward');
    fixture.detectChanges();
    component.goToMessages();
    expect(component.premiumAlert).toHaveBeenCalledTimes(0);
    expect(navControl.navigateForward).toHaveBeenCalledWith('trainer-messages');
  });
});
