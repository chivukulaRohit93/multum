import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhireComponent } from './myhire.component';

describe('MyhireComponent', () => {
  let component: MyhireComponent;
  let fixture: ComponentFixture<MyhireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
