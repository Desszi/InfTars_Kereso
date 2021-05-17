import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexSearchComponent } from './page/complex-search/complex-search.component';
import { SimpleSearchComponent } from './page/simple-search/simple-search.component';

const routes: Routes = [
  {
    path: 'simple-search',
    component: SimpleSearchComponent,
  },
  {
    path: 'complex-search',
    component: ComplexSearchComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
