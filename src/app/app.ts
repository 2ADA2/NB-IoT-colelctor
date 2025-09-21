import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Core } from './services/core';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    // core = inject(Core);
}
