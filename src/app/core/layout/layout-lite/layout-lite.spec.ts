import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLite } from './layout-lite';

describe('LayoutLite', () => {
  let component: LayoutLite;
  let fixture: ComponentFixture<LayoutLite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLite],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutLite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
