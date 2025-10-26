import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandling1Component } from './form-handling1.component';

describe('FormHandling1Component', () => {
  let component: FormHandling1Component;
  let fixture: ComponentFixture<FormHandling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandling1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
