import { Component, effect, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { SourceService } from '../../../services/mqtt/source-service';
import { FormattedSourcesInterface } from '../../../core/interfaces/sources';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  standalone: true,
})
export class Table implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);
  public sources: FormattedSourcesInterface[] = [];

  ngOnInit() {
    if (!this.sources.length) {
      this.sourceService.updateSources().subscribe();
    }
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.sources = this.sourceService.formattedSources();
      });
    });
  }
}
