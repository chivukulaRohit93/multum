import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProfileEditComponent } from './service-profile-edit.component';

describe('ServiceProfileEditComponent', () => {
  let component: ServiceProfileEditComponent;
  let fixture: ComponentFixture<ServiceProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
