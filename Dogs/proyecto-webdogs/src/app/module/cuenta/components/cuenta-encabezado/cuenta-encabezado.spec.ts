
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaEncabezadoComponent } from './cuenta-encabezado.component';

describe('CuentaEncabezadoComponent', () => {
  let component: CuentaEncabezadoComponent;
  let fixture: ComponentFixture<CuentaEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
