import { Injectable } from '@angular/core';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Champion } from '../../models/champion.model';

/* *
 *  This facade is used to abstract the business logic of normalizing response payload data
 *  from the restful service
 * */
@Injectable()
export class WorldChampionFacade {
  constructor(private worldChampionService: WorldChampionApiService) {}

  listChampions(): Observable<Array<Champion>> {
    // declare local variable of array type champion
    const champions: Array<Champion> = [];
    /* *
     *  invoke get method of WorldChampionApiService api service and subscribe.
     *  this call is safe because httpClient calls auto unsubscribe the observable. It means there
     *  is no risk of getting into memory leaks due to opn subscription.
     * */
    this.worldChampionService.get().subscribe(data => {
      // Extract fields from array and use to rebuild a new desired array suitable for the presentation layer.
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
