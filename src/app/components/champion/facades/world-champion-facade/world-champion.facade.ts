import { Injectable } from '@angular/core';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Champion } from '../../models/champion.model';

@Injectable()
export class WorldChampionFacade {

  constructor(private worldChampionService: WorldChampionApiService) {}

  listChampions(): Observable<Array<Champion>> {
    const champions: Array<Champion> = [];
    this.worldChampionService.get().subscribe(data => {
      console.log('data', data);
      data.MRData.StandingsTable.StandingsLists.forEach(item => {
        champions.push({
          season: item.season,
          round: item.round,
          position: item.DriverStandings[0].position,
          points: item.DriverStandings[0].points,
          driver: item.DriverStandings[0].Driver
        });
      });
    });
    return of(champions);
  }

}
