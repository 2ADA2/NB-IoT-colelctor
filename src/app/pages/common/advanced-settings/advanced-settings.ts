import { Component, effect, inject } from '@angular/core';
import { BlockHead } from "../../components/block-head/block-head";
import { Body } from '../../components/body/body';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSettingsService } from '../../../services/advanced-settings-service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-advanced-settings',
  imports: [
    BlockHead,
    Body,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './advanced-settings.html',
  styleUrl: './advanced-settings.scss',
})
export class AdvancedSettings {
  private advSettingsService = inject(AdvancedSettingsService);

  public consoleText = new FormControl("");

  constructor() {
    effect(() => {
      this.consoleText.setValue(this.advSettingsService.advSettings());
    });
  }

  public updateSettings() {
    this.advSettingsService.setSettings(this.consoleText.value || "");
  }

  public fileName = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = '';
    }
  }
}
