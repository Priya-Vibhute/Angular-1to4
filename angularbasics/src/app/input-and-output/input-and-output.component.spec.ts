import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndOutputComponent } from './input-and-output.component';

describe('InputAndOutputComponent', () => {
  let component: InputAndOutputComponent;
  let fixture: ComponentFixture<InputAndOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAndOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAndOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
