import { Injectable } from '@angular/core';
import { MessageInterface, MessageTypeInterface } from '../core/interfaces/messages';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  private messages:Map<string, MessageInterface> = new Map<string, MessageInterface>();
  public messagesCount = new Subject<number>();

  getMessages():MessageInterface[] {
    const formatted_messages:MessageInterface[] = [];
    this.messages.forEach((message:MessageInterface) => {
      return formatted_messages.push(message);
    });
    return formatted_messages.reverse();
  }

  newMessage(header:string, message: string, type:MessageTypeInterface): void {
    const id = new Date().toISOString()+"ID";
    this.messages.set(id, { id, type, message, header });
    this.update();
  }

  createError(header:string, message:string):void {
    const type = "danger";
    const id = new Date().toISOString()+"ID";
    this.messages.set(id, { id, type, message, header });
    this.update();
  }

  deleteMessage(id: string) {
    this.messages.delete(id);
    this.update();
  }

  deleteMessages() {
    this.messages = new Map<string, MessageInterface>();
  }

  update() {
    this.messagesCount.next(this.messages.size);
  }
}
