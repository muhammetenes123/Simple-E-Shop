import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddForms2Component } from './products-add-forms2.component';

describe('ProductsAddForms2Component', () => {
  let component: ProductsAddForms2Component;
  let fixture: ComponentFixture<ProductsAddForms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddForms2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
