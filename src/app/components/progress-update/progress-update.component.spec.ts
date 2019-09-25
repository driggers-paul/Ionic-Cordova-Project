import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressUpdateComponent } from './progress-update.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CameraPhotos } from '../../services/camera/camera.service';
// import {By} from '@angular/platform-browser';

describe('ProgressUpdateComponent', () => {
  let component: ProgressUpdateComponent;
  let fixture: ComponentFixture<ProgressUpdateComponent>;

  function init() {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IonicModule
      ],
      providers: [ModalController],
      declarations: [ProgressUpdateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

  }

  it('should handle an empty update', () => {
    init();
    fixture = TestBed.createComponent(ProgressUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const e: HTMLElement = fixture.nativeElement;
    expect(e.getElementsByClassName('thumbnail').length).toEqual(0);
  });

  it('should handle a valid update', () => {
    init();
    fixture = TestBed.createComponent(ProgressUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const update = <CameraPhotos>{
      picture_front: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      picture_back: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      picture_side: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      id: 123,
      transphormer_id: 1,
    };
    component.update = update;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const e: HTMLElement = fixture.nativeElement;
    expect(e.getElementsByClassName('thumbnail').length).toEqual(3);
  });

  // function createModalSpy() {
  //   const create = jasmine.createSpy('create').and.callFake(() => {
  //     return {
  //       present:
  //         async(() => {
  //           return true;
  //         })
  //     };
  //   });
  //   return {
  //     create
  //   };
  // }
  //
  // it('should handle a click', () => {
  //   const testModalController = createModalSpy();
  //   TestBed.configureTestingModule({
  //     imports: [
  //       CommonModule,
  //       IonicModule
  //     ],
  //     providers: [{provide: ModalController, useClass: testModalController}],
  //     declarations: [ProgressUpdateComponent],
  //     schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //   })
  //     .compileComponents();
  //
  //   fixture = TestBed.createComponent(ProgressUpdateComponent);
  //   component = fixture.componentInstance;
  //   const update = <CameraPhotos>{
  //     picture_front: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
  //     picture_back: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
  //     picture_side: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
  //     id: 123,
  //     transphormer_id: 1,
  //   };
  //   component.update = update;
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  //   const e: HTMLElement = fixture.nativeElement;
  //   const thumbnailDe = fixture.debugElement.query(By.css('.thumbnail'));
  //   console.log(thumbnailDe);
  //   expect(e.getElementsByClassName('thumbnail').length).toEqual(3);
  //   thumbnailDe.triggerEventHandler('click');
  //
  // });
});
