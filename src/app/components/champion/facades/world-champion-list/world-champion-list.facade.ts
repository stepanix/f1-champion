import { Injectable } from '@angular/core';
import { JsonResponse } from 'src/app/core/models/json-response.model';
import { Champion } from '../../models/champion.model';

@Injectable()
export class WorldChampionListFacade {

  constructor() { }

  parse(jsonResponse: JsonResponse): Array<Champion> {
    const champions: Array<Champion> = [];
    jsonResponse.MRData.StandingsTable.StandingsLists.forEach(item => {
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
