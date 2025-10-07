import { Component, inject } from '@angular/core';
import { MessageService } from '../../../../services/message-service';
import { MessageInterface } from '../../../interfaces/messages';

@Component({
  selector: 'app-message-container',
  imports: [],
  templateUrl: './message-container.html',
  styleUrl: './message-container.scss',
})
export class MessageContainer {
  private messageService: MessageService = inject(MessageService);
  public messages:MessageInterface[] = [];

  constructor() {
    this.messageService.messagesCount.subscribe(() => {
      this.messages = this.messageService.getMessages();
    });
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id);
  }
}
