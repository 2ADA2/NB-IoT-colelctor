import { Injectable } from '@angular/core';
import { MessageInterface, MessageTypeInterface } from '../core/interfaces/messages';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages = new Map<string, MessageInterface>();
  public messagesCount = new Subject<number>();

  getMessages() {
    return this.messages;
  }

  newMessage(message: string, header:string, type:MessageTypeInterface): void {
    this.messages.set(new Date().toISOString()+"ID", { type, message, header });
  }

  deleteMessage(id: string) {
    this.messages.delete(id);
  }

  deleteMessages(id: string) {
    this.messages = new Map<string, MessageInterface>();
  }

  update() {
    this.messagesCount.next(this.messages.size);
  }
}
