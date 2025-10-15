import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsole } from './home-console';

describe('HomeConsole', () => {
  let component: HomeConsole;
  let fixture: ComponentFixture<HomeConsole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConsole],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeConsole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
