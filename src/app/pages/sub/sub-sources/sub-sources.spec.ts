import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSources } from './sub-sources';

describe('SubSources', () => {
  let component: SubSources;
  let fixture: ComponentFixture<SubSources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubSources],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
