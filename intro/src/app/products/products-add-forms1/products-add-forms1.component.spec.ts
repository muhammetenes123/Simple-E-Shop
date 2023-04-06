import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddForms1Component } from './products-add-forms1.component';

describe('ProductsAddForms1Component', () => {
  let component: ProductsAddForms1Component;
  let fixture: ComponentFixture<ProductsAddForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddForms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
