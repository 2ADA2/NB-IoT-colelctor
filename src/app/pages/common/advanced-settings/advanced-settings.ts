import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  runInInjectionContext,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BlockHead } from "../../components/block-head/block-head";
import { Body } from '../../components/body/body';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSettingsService } from '../../../services/common/advanced-settings-service';
import { ADV_SETTINGS_ERR_RU, ADV_SETTINGS_RU } from '../../../core/localization/ru/adv-settings-ru';
import { MessageService } from '../../../services/common/message-service';


@Component({
  selector: 'app-advanced-settings',
  imports: [
    BlockHead,
    Body,
    ReactiveFormsModule,
  ],
  templateUrl: './advanced-settings.html',
  styleUrl: './advanced-settings.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedSettings implements OnInit {

  private injector = inject(Injector);

  private advSettingsService = inject(AdvancedSettingsService);
  private messageService = inject(MessageService);

  public consoleText = new FormControl("");

  ngOnInit() {
    this.advSettingsService.getSettings().subscribe();

    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.consoleText.setValue(this.advSettingsService.advSettings());
      });
    });
  }

  public updateSettings() {
    this.advSettingsService.setSettings(this.consoleText.value || "");
  }

  public frontFileName = "";
  private frontFile: File | null = null;

  public frontFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const name = input.files[0].name;
      if (name.slice(name.length - 3, name.length) !== "zip") {
        this.messageService.createError(
          ADV_SETTINGS_ERR_RU.ZIP_ERROR,
          ADV_SETTINGS_ERR_RU.ZIP_ERROR_MESSAGE,
        );
        return;
      }
      this.frontFileName = input.files[0].name;
      this.frontFile = input.files[0];
    } else {
      this.frontFileName = '';
      this.frontFile = null;
    }
  }

  public backFileName = "";
  private backFile: File | null = null;

  public backFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.backFileName = input.files[0].name;
      this.backFile = input.files[0];
    } else {
      this.backFileName = '';
      this.backFile = null;
    }
  }

  sendFiles() {
    if (!this.frontFile && !this.backFile) {
      this.messageService.createError(
        ADV_SETTINGS_ERR_RU.FILE_ERROR,
        ADV_SETTINGS_ERR_RU.FILE_ERROR_MESSAGE,
      );
      return;
    }
    if (this.frontFile) {
      this.advSettingsService.saveFrontend(this.frontFile);
    }
    if (this.backFile) {
      this.advSettingsService.saveBackend(this.backFile);
    }
  }

  protected readonly ADV_SETTINGS_RU = ADV_SETTINGS_RU;
}
