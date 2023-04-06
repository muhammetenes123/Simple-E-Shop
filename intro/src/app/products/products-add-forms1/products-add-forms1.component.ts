import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../products';

@Component({
  selector: 'app-products-add-forms1',
  templateUrl: './products-add-forms1.component.html',
  styleUrls: ['./products-add-forms1.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductsAddForms1Component {
constructor( private categoryService: CategoryService,
 private productService:ProductService,private alertifyService:AlertifyService) { }
model:Product = new Product();
categories !: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success (data.name + " Başarıyla Eklendi")
    });
  }
}
