import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

// A special type of Service Module.
// Available everywhere in the application. 
const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
 /*
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  */
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '', redirectTo: '/categorieslist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// https://angular.io/api/router/RouterModule
/* RouterModule can be imported multiple times: once per lazily-loaded bundle. Since the router deals with a global shared resource--location, we cannot have more than one router service active.

That is why there are two ways to create the module: RouterModule.forRoot and RouterModule.forChild.

forRoot creates a module that contains all the directives, the given routes, and the router service itself.
forChild creates a module that contains all the directives and the given routes, but does not include the router service.
*/
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
