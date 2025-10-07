import { Component, computed, inject } from '@angular/core';
import { Header } from '../components/header/header';
import { Navigation } from '../components/navigation/navigation';
import { RouterOutlet } from '@angular/router';
import { Core } from '../../../services/core';
import { Loading } from '../../../pages/loading/loading';
import { MessageContainer } from '../components/message-container/message-container';

@Component({
  selector: 'app-layout-main',
  imports: [
    Header,
    Navigation,
    RouterOutlet,
    Loading,
    MessageContainer,
  ],
  templateUrl: './layout-main.html',
  styleUrl: './layout-main.scss',
  standalone: true,
})
export class LayoutMain {
  private core: Core = inject(Core);
  public isLoading = computed(() => this.core.coreLoading());
}
