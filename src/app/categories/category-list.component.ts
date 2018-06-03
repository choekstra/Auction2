// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Category, CategoryService }  from './category.service';

@Component({
  template: `
    <h2>CATEGORIES</h2>
    <ul class="items">
      <li *ngFor="let category of categories$ | async"
        [class.selected]="category.id === selectedId">
        <a [routerLink]="['/category', category.id]">
          <span class="badge">{{ category.id }}</span>{{ category.name }}
        </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;

  private selectedId: number;

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categories$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCategories();
      })
    );
  }
}
