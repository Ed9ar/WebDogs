import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerroFormularioComponent } from './registrar-perro-formulario.component';

describe('RegistrarPerroFormularioComponent', () => {
  let component: RegistrarPerroFormularioComponent;
  let fixture: ComponentFixture<RegistrarPerroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPerroFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPerroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
