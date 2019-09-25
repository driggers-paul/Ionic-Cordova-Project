import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Transphormer } from '../authentication/authentication.service';
import { ErrorFormat } from '../errors/errors.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Platform } from '@ionic/angular';

export interface MessageCount {
  unread_transphormer_messages: number;
  unread_advisor_messages: number;
}

export interface Message {
  id: number;
  message: string;
  from_id: number;
  to_id: number;
  message_from?: Transphormer;
  message_to?: Transphormer;
  group_name: string | null;
  created_at: string;
  read_at: string | null;
}

export interface Conversation {
  transphormer: { id: number; display_name: string };
  count: number;
  unread_count: number;
  last_message_timestamp?: string;
  last_message_i_sent?: Message;
  last_message_received?: Message;
  i_sent_last_message: boolean;
}

export interface GroupParticipants {
  group_name: string;
  transphormer_id: number;
  transphormer: Transphormer;
  is_trainer: boolean;
  group: GroupParticipants[];
}

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    MessageService.SET_PLATFORM(platform);
  }

  public messages(to_id: number): Promise<Message[] | ErrorFormat> {
    return this.http.get<Message[]>(MessageService.Url(`messages/${to_id}`), MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }

  public sendMessage(to_id: number, message: string): Promise<Message | ErrorFormat> {
    return this.http.post<Message>(MessageService.Url('messages'), {to_id, message}, MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }

  public advisorConversations(): Promise<Conversation[] | ErrorFormat> {
    return this.http.get<Conversation[]>(MessageService.Url('advisor/conversations'), MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }

  public userGroups(): Promise<GroupParticipants[] | ErrorFormat> {
    return this.http.get<GroupParticipants[]>(MessageService.Url('group-messages'), MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }
  public sendGroupMessage(group_name: string, message: string): Promise<Message | ErrorFormat> {
    return this.http.post<Message>(MessageService.Url('group-messages'), {group_name, message}
      , MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }

  public markMessagesAsRead(messageIds: number[]): Promise<any> {
    const data = {
      message_ids: messageIds
    };

    return this.http.post(MessageService.Url('messages/mark-read'), data, MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }

  public unreadMessageCount(): Promise<MessageCount | ErrorFormat> {
    return this.http.get<MessageCount>(MessageService.Url('messages/unread-messages'), MessageService.BaseOptions())
      .toPromise()
      .catch(MessageService.HandleError);
  }
}
