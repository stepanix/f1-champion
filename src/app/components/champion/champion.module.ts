import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRoutingModule } from './champion-routing.module';
import { WorldChampionListComponent } from './containers/world-champion-list/world-champion-list.component';
import { WorldChampionApiService } from './services/apis/world-champion.api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChampionListPipe } from 'src/app/shared/pipes/champion/champion-list.pipe';



@NgModule({
  declarations: [WorldChampionListComponent],
  providers: [WorldChampionApiService, ChampionListPipe],
  imports: [
    CommonModule,
    ChampionRoutingModule,
    SharedModule
  ]
})
export class ChampionModule { }
