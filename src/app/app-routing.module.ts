import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages';

const routes: Routes = [
    { path:'list/1', component: Pages.List1Component },
    { path:'list/2', component: Pages.List2Component },
    { path:'list/3', component: Pages.List3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
