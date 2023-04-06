import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductsAddForms1Component } from './products/products-add-forms1/products-add-forms1.component';
import { ProductsAddForms2Component } from './products/products-add-forms2/products-add-forms2.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products-add-forms1', component: ProductsAddForms1Component},
  {path: 'products-add-forms2', component: ProductsAddForms2Component},
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path: 'products/category/:categoryId', component: ProductsComponent },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
