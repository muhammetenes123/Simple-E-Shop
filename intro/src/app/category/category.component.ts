import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent {
  constructor( private categoryService: CategoryService) { }
  title = "Kategori Listesi"
  categories !: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
