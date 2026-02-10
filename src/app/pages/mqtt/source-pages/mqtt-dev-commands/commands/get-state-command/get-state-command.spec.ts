import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStateCommand } from './get-state-command';

describe('GetStateCommand', () => {
  let component: GetStateCommand;
  let fixture: ComponentFixture<GetStateCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStateCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetStateCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
