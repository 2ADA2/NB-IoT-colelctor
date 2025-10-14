import { Injectable, signal, WritableSignal } from '@angular/core';
import { MessageInterface, MessageTypeInterface } from '../core/interfaces/messages';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  public messages: WritableSignal<Map<string, MessageInterface>> = signal(new Map());


  public getMessages():MessageInterface[] {
    const formatted_messages:MessageInterface[] = [];
    this.messages().forEach((message:MessageInterface) => {
      return formatted_messages.push(message);
    });
    return formatted_messages.reverse();
  }

  public newMessage(header:string, message: string, type:MessageTypeInterface): void {
    this.messages.update((prev) => {
      const id = new Date().toISOString()+"ID";
      const copy = new Map(prev);
      copy.set(id, { id, type, message, header });
      return copy;
    });
  }

  public createError(header:string, message:string):void {
    const type = "danger";
    this.messages.update((prev) => {
      const id = new Date().toISOString()+"ID";
      const copy = new Map(prev);
      copy.set(id, { id, type, message, header });
      setTimeout(() => {
        this.deleteMessage(id);
      },2000);
      return copy;
    });
  }

  public deleteMessage(id: string) {
    this.messages.update((prev) => {
      const copy = new Map(prev);
      copy.delete(id);
      return copy;
    });
  }

  public deleteMessages() {
    this.messages.update(() => new Map());
  }
}
