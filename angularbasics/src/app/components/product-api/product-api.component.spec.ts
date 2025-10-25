import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAPIComponent } from './product-api.component';

describe('ProductAPIComponent', () => {
  let component: ProductAPIComponent;
  let fixture: ComponentFixture<ProductAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
