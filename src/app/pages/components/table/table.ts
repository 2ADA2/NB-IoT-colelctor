import { Component, effect, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { SourceService } from '../../../services/mqtt/source-service';
import { FormattedSourcesInterface } from '../../../core/interfaces/sources';
import { RouterLink } from '@angular/router';
import { SOURCES_ROUTE } from '../../../core/consts/routes';

@Component({
  selector: 'app-table',
  imports: [
    RouterLink,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  standalone: true,
})
export class Table implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);
  public sources: FormattedSourcesInterface[] = [];

  public ngOnInit() {
    if (!this.sources.length) {
      this.sourceService.updateSources().subscribe();
    }
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.sources = this.sourceService.formattedSources();
      });
    });
  }

  protected readonly SOURCES_ROUTE = SOURCES_ROUTE;
}
