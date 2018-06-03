import { Component } from '@angular/core';

// The application shell.
  @Component({
    selector: 'app-root',

    template: `
      <h1 class="title">Angular Router</h1>
      <nav>
      <!-- RouterLink directives with one-time binding strings. No route parameters yet.
       When URL changes, router activates an instance of CrisisListComponent,
       diplays its view, updates the browser's address location & history 
       with the URL for that path. 

       routerLinkActive could be a string of classes: active donut...
       options:  {exaxt: true} ... active if exact URL match to current URL
      -->

       <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
        <a routerLink="/categorieslist" routerLinkActive="active">List of Categories</a>
        <a routerLink="/admin" routerLinkActive="active">Admin</a>
        <a routerLink="/login" routerLinkActive="active">Login</a>
        <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      </nav>

      <!-- RouterOutlet is a directive from the router lib. 
       The router adds <router-outlet> element to DOM, inserts view after.
       It's where the router swaps views on and off the page. 
      -->
       <router-outlet></router-outlet>
      <router-outlet name="popup"></router-outlet>
    `
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fleetwood Auction';
}
