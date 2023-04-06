import { Injectable } from '@angular/core';
import { Category } from '../category/category'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CategoryService {
  path = 'http://localhost:3000/categories'
  constructor( private http: HttpClient) { }
  getCategories():Observable<Category []> {
    return this.http.get<Category[]>(this.path)
  }
}
