import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  {
    path: 'app-about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'app-page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouting {}
