import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroButtonComponent } from './registro-button.component';

describe('RegistroButtonComponent', () => {
  let component: RegistroButtonComponent;
  let fixture: ComponentFixture<RegistroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
