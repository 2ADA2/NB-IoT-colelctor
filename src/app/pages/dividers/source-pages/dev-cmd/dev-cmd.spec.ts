import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCmd } from './dev-cmd';

describe('DevCmd', () => {
  let component: DevCmd;
  let fixture: ComponentFixture<DevCmd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevCmd],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DevCmd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
