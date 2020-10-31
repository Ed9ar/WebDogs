import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPerroInfoComponent } from './perfil-perro-info.component';

describe('PerfilPerroInfoComponent', () => {
  let component: PerfilPerroInfoComponent;
  let fixture: ComponentFixture<PerfilPerroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPerroInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPerroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
