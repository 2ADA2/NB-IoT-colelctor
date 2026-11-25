import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSensorCommand } from './get-sensor-command';

describe('GetSensorCommand', () => {
  let component: GetSensorCommand;
  let fixture: ComponentFixture<GetSensorCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSensorCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetSensorCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
