import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnerListComponent } from './views/winner-list/winner-list.component';


const routes: Routes = [
  {
    path: '',
    component: WinnerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinnerRoutingModule { }
