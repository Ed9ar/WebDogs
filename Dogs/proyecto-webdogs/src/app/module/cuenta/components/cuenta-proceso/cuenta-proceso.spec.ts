import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaProcesoComponent } from './cuenta-proceso.component';

describe('CuentaProcesoComponent', () => {
  let component: CuentaProcesoComponent;
  let fixture: ComponentFixture<CuentaProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
