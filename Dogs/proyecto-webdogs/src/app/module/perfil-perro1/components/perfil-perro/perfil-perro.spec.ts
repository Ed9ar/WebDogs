import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPerroComponent } from './perfil-perro.component';

describe('PerfilPerroComponent', () => {
  let component: PerfilPerroComponent;
  let fixture: ComponentFixture<PerfilPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPerroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
