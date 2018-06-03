import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { CategoryService } from './category.service';
import { CategoryDetailComponent } from './category-detail.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoryListComponent, CategoryDetailComponent],
  providers: [CategoryService]
})
export class CategoriesModule { }
