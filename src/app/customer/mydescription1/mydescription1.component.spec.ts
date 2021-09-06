import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mydescription1Component } from './mydescription1.component';

describe('Mydescription1Component', () => {
  let component: Mydescription1Component;
  let fixture: ComponentFixture<Mydescription1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mydescription1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mydescription1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
