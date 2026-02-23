import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebootCommand } from './reboot-command';

describe('RebootCommand', () => {
  let component: RebootCommand;
  let fixture: ComponentFixture<RebootCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebootCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RebootCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
