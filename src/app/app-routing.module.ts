import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldChampionListComponent } from './components/champion/containers/world-champion-list/world-champion-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    component: WorldChampionListComponent,
    path: 'home'
  },
  { path: 'winners/:season/:driverId', loadChildren: './components/winner/winner.module#WinnerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
