import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRoutingModule } from './champion-routing.module';
import { WorldChampionListComponent } from './containers/world-champion-list/world-champion-list.component';
import { WorldChampionApiService } from './services/apis/world-champion.api.service';
import { WorldChampionFacade } from './facades/world-champion-facade/world-champion.facade';
import { DriverNamePipeModule } from 'src/app/shared/pipes/driver/driver-pipe.module';


@NgModule({
  declarations: [WorldChampionListComponent],
  providers: [WorldChampionApiService, WorldChampionFacade],
  imports: [
    CommonModule,
    ChampionRoutingModule,
    DriverNamePipeModule
  ]
})
export class ChampionModule { }
