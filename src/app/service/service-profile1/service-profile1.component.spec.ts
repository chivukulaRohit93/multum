import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProfile1Component } from './service-profile1.component';

describe('ServiceProfile1Component', () => {
  let component: ServiceProfile1Component;
  let fixture: ComponentFixture<ServiceProfile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProfile1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProfile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
