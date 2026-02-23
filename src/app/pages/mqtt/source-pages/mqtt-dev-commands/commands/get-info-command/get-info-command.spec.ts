import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInfoCommand } from './get-info-command';

describe('GetInfoCommand', () => {
  let component: GetInfoCommand;
  let fixture: ComponentFixture<GetInfoCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInfoCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetInfoCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
