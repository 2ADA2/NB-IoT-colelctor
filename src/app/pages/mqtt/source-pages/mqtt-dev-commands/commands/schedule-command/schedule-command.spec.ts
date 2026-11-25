import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCommand } from './schedule-command';

describe('ScheduleCommand', () => {
  let component: ScheduleCommand;
  let fixture: ComponentFixture<ScheduleCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScheduleCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
