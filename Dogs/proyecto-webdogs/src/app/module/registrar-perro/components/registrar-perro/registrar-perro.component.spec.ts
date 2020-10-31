import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerroComponent } from './registrar-perro.component';

describe('RegistrarPerroComponent', () => {
  let component: RegistrarPerroComponent;
  let fixture: ComponentFixture<RegistrarPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPerroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
