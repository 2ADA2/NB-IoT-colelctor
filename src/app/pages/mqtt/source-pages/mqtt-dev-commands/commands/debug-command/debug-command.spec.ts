import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugCommand } from './debug-command';

describe('DebugCommand', () => {
  let component: DebugCommand;
  let fixture: ComponentFixture<DebugCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DebugCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
