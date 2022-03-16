import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisummaryComponent } from './emisummary.component';

describe('EmisummaryComponent', () => {
  let component: EmisummaryComponent;
  let fixture: ComponentFixture<EmisummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
