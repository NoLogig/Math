import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'choice', children: [], component: SplitScreenSkewedComponent },
  // { path: 'img/:id', component: ImageManipulationComponent,
  //   children: [
  //     { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //     { path: 'overview', component: ImgOverviewComponent },
  //     { path: 'specs', component: ImgSpecsComponent }
  //   ]
  // },
  // { path: '**', component: SplitScreenScewComponent }  // to Do: Fancy 404 PageNotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
