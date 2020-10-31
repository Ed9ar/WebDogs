
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEncabezadoComponent } from './contacto-encabezado.component';

describe('ContactoEncabezadoComponentt', () => {
  let component: ContactoEncabezadoComponent;
  let fixture: ComponentFixture<ContactoEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
