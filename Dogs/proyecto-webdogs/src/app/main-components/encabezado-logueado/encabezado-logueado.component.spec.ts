import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoLogueadoComponent } from './encabezado-logueado.component';

describe('EncabezadoLogueadoComponent', () => {
  let component: EncabezadoLogueadoComponent;
  let fixture: ComponentFixture<EncabezadoLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoLogueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
