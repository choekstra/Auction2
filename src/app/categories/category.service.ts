import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class Category {
  constructor(public id: number, public name: string) { }
}

const CATEGORIES = [
  new Category(11, 'Business Liquidations'),
  new Category(12, 'Complete Facility or Surplus Assets'),
  new Category(13, 'Estate Liquidations'),
  new Category(14, 'Estimates and Appraisals')
];

@Injectable()
export class CategoryService {
  getCategories() { return of(CATEGORIES); }

  getCategory(id: number | string) {
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map(categories => categories.find(category => category.id === +id))
    );
  }
}
