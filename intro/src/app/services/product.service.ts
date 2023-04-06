import { Injectable } from '@angular/core';
import { Product } from '../products/products'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category/category';
@Injectable()
export class ProductService {
  path = 'http://localhost:3000/products'
  constructor( private http: HttpClient) { }
  getProducts(categoryId: Category):Observable<Product []> {
    let newPath=this.path;
    if (categoryId) {
      newPath+="?categoryId="+categoryId
    }

    return this.http.get<Product[]>(newPath)
  }
  addProduct(products: Product): Observable<Product>{
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Blank'
      })
    }
    return this.http.post<Product>(this.path, products,httpOptions)
  }
}
