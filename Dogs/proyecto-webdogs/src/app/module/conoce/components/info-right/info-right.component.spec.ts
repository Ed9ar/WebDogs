import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRightComponent } from './info-right.component';

describe('InfoRightComponent', () => {
  let component: InfoRightComponent;
  let fixture: ComponentFixture<InfoRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
