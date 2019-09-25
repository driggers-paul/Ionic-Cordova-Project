import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-camera-buttons',
  templateUrl: './camera-buttons.component.html',
  styleUrls: ['./camera-buttons.component.scss'],
})
export class CameraButtonsComponent {
  @Input()
  public flashOn: boolean;

  @Output()
  public flashChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public swapCamera: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public takePicture: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public takePictureWithDelay: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public delayTimerCancelled: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public delayTimerRunning: boolean;

  public flashCameraAction() {
    this.flashChange.emit(this.flashOn);
  }

  public swapCameraAction() {
    this.swapCamera.emit();
  }

  public captureImageAction() {
    this.takePicture.emit();
  }

  public takePictureWithDelayAction() {
    this.takePictureWithDelay.emit();
  }

  public cancelDelayTimer() {
    this.delayTimerCancelled.emit();
  }
}
