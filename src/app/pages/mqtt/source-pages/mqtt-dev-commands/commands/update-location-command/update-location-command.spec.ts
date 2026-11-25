import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationCommand } from './update-location-command';

describe('UpdateLocationCommand', () => {
  let component: UpdateLocationCommand;
  let fixture: ComponentFixture<UpdateLocationCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLocationCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateLocationCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
