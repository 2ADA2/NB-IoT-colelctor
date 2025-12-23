import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { MeasInfoInterface } from '../../../../../../core/interfaces/device';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardComponent {
  public type = input.required<number>();
  public time = input.required<string>();
  public measInfo = input.required<MeasInfoInterface>();
  public measState = input.required<string>();
  public measError = input<string>();
  public scheduleState = input<string>();
}
