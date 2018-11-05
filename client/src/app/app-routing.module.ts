import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: 'nologig', pathMatch: 'full' },
  // { path: 'nologig', children: [], component: NoLogigComponent },
  // { path: 'nologig', children: [], component: NoLogigComponent },
  // { path: 'nologig/:id', component: NoLogigComponent,
  //   children: [
  //     { path: '', redirectTo: 'OverviewComponent', pathMatch: 'full' },
  //     { path: 'overview', component: OverviewComponent },
  //     { path: 'details', component: DetailsComponent }
  //   ]
  // },
  // // ToDo: Fancy PageNotFound
  // { path: '**', component: NoLogigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
