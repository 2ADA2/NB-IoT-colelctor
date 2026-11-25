import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationCommand } from './get-location-command';

describe('GetLocationCommand', () => {
  let component: GetLocationCommand;
  let fixture: ComponentFixture<GetLocationCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetLocationCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetLocationCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
