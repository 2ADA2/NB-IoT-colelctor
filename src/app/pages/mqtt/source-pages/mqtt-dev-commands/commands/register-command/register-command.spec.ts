import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCommand } from './register-command';

describe('RegisterCommand', () => {
  let component: RegisterCommand;
  let fixture: ComponentFixture<RegisterCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
