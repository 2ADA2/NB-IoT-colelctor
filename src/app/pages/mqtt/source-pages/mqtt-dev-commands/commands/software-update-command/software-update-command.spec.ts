import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUpdateCommand } from './software-update-command';

describe('SoftwareUpdateCommand', () => {
  let component: SoftwareUpdateCommand;
  let fixture: ComponentFixture<SoftwareUpdateCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareUpdateCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftwareUpdateCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
