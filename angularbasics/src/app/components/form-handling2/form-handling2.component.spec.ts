import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandling2Component } from './form-handling2.component';

describe('FormHandling2Component', () => {
  let component: FormHandling2Component;
  let fixture: ComponentFixture<FormHandling2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandling2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
