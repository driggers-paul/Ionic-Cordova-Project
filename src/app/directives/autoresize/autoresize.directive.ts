import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'ion-textarea[appAutoresize]'
})
export class AutoresizeDirective {
  public maxHeight;

  @Output() resize: EventEmitter<any> = new EventEmitter();

  @HostListener('ionChange')
  change() {
    this.adjust(this.element.nativeElement.lastChild);
  }

  constructor(public element: ElementRef) {
    this.maxHeight = ((window.screen.height) / 4).toFixed(0);
  }

  adjust(textArea?: HTMLTextAreaElement | any): void {
    // This is a bit of a hack. Since the internal element doesn't have an ID,
    // I'm just assuming that the lastChild is the actual shadow <textarea>.
    // Anyway, the way that this works is fairly simple...
    // Grab the "real" input.
    // Set the input to 1 row high and then set the style height to auto. This
    // is required to get the height of the textarea to decrease when text is
    // removed.
    textArea.rows = 1;
    textArea.style.height = 'auto';
    // Grab the height of the shadow input's scroll-area.
    let newHeight = textArea.scrollHeight;
    // If it's bigger than 1/4 of the screen (see constructor), then limit it.
    if (textArea.scrollHeight > this.maxHeight) {
      newHeight = this.maxHeight;
    }

    const currentHeight = textArea.clientHeight;
    // Set the height of both the shadow element and this element. This must
    // be done, otherwise the shadow element will remain at a 1 row-size.
    textArea.style.height = newHeight + 'px';
    (textArea.parentNode as HTMLElement).style.height = newHeight + 'px';

    if (newHeight + 'px' !== currentHeight) {
      this.resize.emit();
    }
  }
}
