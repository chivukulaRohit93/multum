import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastjobsComponent } from './pastjobs.component';

describe('PastjobsComponent', () => {
  let component: PastjobsComponent;
  let fixture: ComponentFixture<PastjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
