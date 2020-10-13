import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLeftComponent } from './info-left.component';

describe('InfoLeftComponent', () => {
  let component: InfoLeftComponent;
  let fixture: ComponentFixture<InfoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
