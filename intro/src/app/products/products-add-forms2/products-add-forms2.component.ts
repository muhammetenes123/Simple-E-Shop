import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../products';

@Component({
  selector: 'app-products-add-forms2',
  templateUrl: './products-add-forms2.component.html',
  styleUrls: ['./products-add-forms2.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductsAddForms2Component {
  constructor(private formbuilder: FormBuilder, private categoryService: CategoryService,private productService : ProductService,private alertifyService:AlertifyService) { }
  productsFormsAdd!: FormGroup;
  product: Product = new Product();
  categories !: Category[];
  createProductFormsAdd() {
    this.productsFormsAdd = this.formbuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
      imageUrl: ["", Validators.required],
    })
  }
  add() {
    if (this.productsFormsAdd.valid) {
      this.product = Object.assign({}, this.productsFormsAdd.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success (data.name + " Başarıyla Eklendi")
    });
  }
  ngOnInit() {
    this.createProductFormsAdd();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
