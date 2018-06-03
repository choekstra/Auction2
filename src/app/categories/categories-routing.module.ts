import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent }    from './category-list.component';
import { CategoryDetailComponent }  from './category-detail.component';

const categoryRoutes: Routes = [
  { path: 'categories', redirectTo: '/categorieslist' },
  { path: 'category/:id', redirectTo: '/categoryid/:id' },
  { path: 'categorieslist',  component: CategoryListComponent },
  { path: 'categoryid/:id', component: CategoryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule { }
