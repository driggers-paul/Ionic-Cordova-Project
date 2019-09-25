import { TestBed } from '@angular/core/testing';
import { LiveChatFeedService } from './live-chat-feed.service';

describe('LiveChatFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveChatFeedService = TestBed.get(LiveChatFeedService);
    expect(service).toBeTruthy();
  });

  it ('should load messages', () => {

  });
});
