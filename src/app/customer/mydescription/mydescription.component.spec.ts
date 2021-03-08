import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydescriptionComponent } from './mydescription.component';

describe('MydescriptionComponent', () => {
  let component: MydescriptionComponent;
  let fixture: ComponentFixture<MydescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
