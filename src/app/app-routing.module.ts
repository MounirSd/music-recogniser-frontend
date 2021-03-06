import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';

const routes: Routes = [
  {
    path: '',
    component: SearchpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
