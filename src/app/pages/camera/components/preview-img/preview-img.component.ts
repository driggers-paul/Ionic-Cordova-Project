import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-preview-img',
  templateUrl: './preview-img.component.html',
  styleUrls: ['./preview-img.component.scss']
})
export class PreviewImgComponent {
  @Output()
  public retake: EventEmitter<undefined> = new EventEmitter();

  @Output()
  public complete: EventEmitter<undefined> = new EventEmitter();

  @Input()
  public set file(file: string) {
    this.setupImageSource(file);
  }

  public imageSource = '';

  @Input()
  public title = 'Preview Image';

  public prevScreen() {
    this.retake.emit(undefined);
  }

  public moveToNextScreen() {
    this.complete.emit();
  }

  private setupImageSource(file: string) {
      this.imageSource = file;
  }
}
