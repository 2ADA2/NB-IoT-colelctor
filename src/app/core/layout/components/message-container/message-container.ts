import { Component, computed, inject } from '@angular/core';
import { MessageService } from '../../../../services/message-service';
import { MessageInterface } from '../../../interfaces/messages';

@Component({
  selector: 'app-message-container',
  imports: [],
  templateUrl: './message-container.html',
  styleUrl: './message-container.scss',
  standalone: true,
})
export class MessageContainer {
  private messageService: MessageService = inject(MessageService);
  public messages = computed(() => {
    const arr: MessageInterface[] = [];
    const map = this.messageService.messages();
    map.forEach((e) => {
      arr.push(e);
    });
    return arr;
  });

  public deleteMessage(id: string) {
    this.messageService.deleteMessage(id);
  }
}
