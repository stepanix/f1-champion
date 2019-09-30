import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRoutingModule } from './champion-routing.module';
import { WorldChampionListComponent } from './views/world-champion-list/world-champion-list.component';
import { WorldChampionListApiService } from './services/apis/world-champion-list.api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorldChampionListFacade } from './facades/world-champion-list/world-champion-list.facade';




@NgModule({
  declarations: [WorldChampionListComponent],
  providers: [WorldChampionListApiService, WorldChampionListFacade],
  imports: [
    CommonModule,
    ChampionRoutingModule,
    SharedModule
  ]
})
export class ChampionModule { }
