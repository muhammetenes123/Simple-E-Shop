import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsAddForms1Component } from './products/products-add-forms1/products-add-forms1.component';
import { ProductsAddForms2Component } from './products/products-add-forms2/products-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { AlertifyService } from './services/alertify.service';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductsComponent,
    ProductFilterPipe,
    SidenavComponent,
    ProductsAddForms1Component,
    ProductsAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
