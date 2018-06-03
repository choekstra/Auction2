import { switchMap } from 'rxjs/operators';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { slideInDownAnimation } from '../animations';

import { Category, CategoryService }  from './category.service';

@Component({
  template: `
  <h2>CATEGORIES</h2>
  <div *ngIf="category$ | async as category">
    <h3>"{{ category.name }}"</h3>
    <div>
      <label>Id: </label>{{ category.id }}</div>
    <div>
      <label>Name: </label>
      <input placeholder="donut" />
    <!--  <input [(ngModel)]="category.name" placeholder="name"/> -->
    </div>
    <p>
      <button (click)="gotoCategories(category)">Back</button>
    </p>
  </div>
  `,
  animations: [ slideInDownAnimation ]
})

export class CategoryDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  category$: Observable<Category>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CategoryService
  ) {}

  ngOnInit() {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCategory(params.get('id')))
    );
  }

  gotoCategories(category: Category) {
    let categoryId = category ? category.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/categories', { id: categoryId, foo: 'foo' }]);
  }
}

