import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {
  
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute
    
  ) { }
  title = "Ürün listesi"
  filtertext = ""
  products!: Product[];

  ngOnInit() {
this.activatedRoute.params.subscribe(params => {
  this.productService.getProducts(params["categoryId"]).subscribe(data => {
     this.products = data;
    });
})

   
  }
  addToCart(product: {
    description: string; name: string;
  }) {
    this.alertifyService.success("Sepete Eklendi: " + product.description)
  }
}
