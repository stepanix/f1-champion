import { Injectable } from '@angular/core';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Champion } from '../../models/champion.model';
import { JsonResponse } from 'src/app/core/models/json-response.model';

/* *
 *  This facade is used to abstract the business logic of normalizing response payload data
 *  from the restful service
 * */
@Injectable()
export class WorldChampionFacade {
  constructor() {}

  parseChampionList(data: JsonResponse): Array<Champion> {
    const champions: Array<Champion> = [];
    data.MRData.StandingsTable.StandingsLists.forEach(item => {
      champions.push({
        season: item.season,
        round: item.round,
        position: item.DriverStandings[0].position,
        points: item.DriverStandings[0].points,
        driver: item.DriverStandings[0].Driver
      });
    });
    return champions;
  }
}

