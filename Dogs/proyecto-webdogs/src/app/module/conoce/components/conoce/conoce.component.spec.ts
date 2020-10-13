import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceComponent } from './conoce.component';

describe('ConoceComponent', () => {
  let component: ConoceComponent;
  let fixture: ComponentFixture<ConoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
