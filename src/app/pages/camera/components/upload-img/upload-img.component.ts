import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent {

  @Input()
  public hideExtraFields: boolean;

  @Output()
  public retake: EventEmitter<undefined> = new EventEmitter();

  @Output()
  public complete: EventEmitter<{
    video: string;
    text: string;
  }> = new EventEmitter();

  public frontImageSource = '';
  public backImageSource = '';
  public sideImageSource = '';

  public text = '';
  public video = '';

  @Input()
  public set frontImage(file: File | string) {
    if (file) {
      this.createImageSource(file, 'frontImageSource');
    }
  }

  @Input()
  public set backImage(file: File | string) {
    if (file) {
      this.createImageSource(file, 'backImageSource');
    }
  }

  @Input()
  public set sideImage(file: File | string) {
    if (file) {
      this.createImageSource(file, 'sideImageSource');
    }
  }

  public prevScreen() {
    this.retake.emit();
  }

  public moveToNextScreen() {
    this.complete.emit({video: this.video, text: this.text});
  }

  private createImageSource(file: File | string, attribute) {
    this[attribute] = file;
  }
}
