import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCommand } from './certificate-command';

describe('CertificateCommand', () => {
  let component: CertificateCommand;
  let fixture: ComponentFixture<CertificateCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CertificateCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
