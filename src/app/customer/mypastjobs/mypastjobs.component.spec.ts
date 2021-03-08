import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypastjobsComponent } from './mypastjobs.component';

describe('MypastjobsComponent', () => {
  let component: MypastjobsComponent;
  let fixture: ComponentFixture<MypastjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypastjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypastjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
