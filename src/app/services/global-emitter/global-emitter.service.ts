import { EventEmitter, Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

interface GlobalEvent {
  name: string;
  data: any;
}

export enum GlobalEvents {
  SessionInitialized = 'session-init', // fired when user has logged in to the application
  TransphormerMessageRead = 'transphormer-message-read', // fired when the transphormer has read messages
  AdvisorMessageRead = 'advisor-message-read', // fired when advisor has read messages
  NewTransphormerMessages = 'new-transphormer-messages', // fired when there are new messages for transphormer
  NewAdvisorMessages = 'new-advisor-message', // fired when advisor has nwe messages
  NewAnnouncement = 'new-announcement', // fired when new announcements are sent
  AnnouncementRead = 'announcement-read' // fired when announcements have been read
}

@Injectable({
  providedIn: 'root'
})
export class GlobalEmitterService {
  public emitter: EventEmitter<GlobalEvent> = new EventEmitter<GlobalEvent>();

  constructor() {
  }

  public emit(name: string, data?: any) {
    this.emitter.emit({
      name,
      data
    });
  }

  public listen(eventName: string) {
    return this.emitter.pipe(filter(event => event.name === eventName));
  }
}
