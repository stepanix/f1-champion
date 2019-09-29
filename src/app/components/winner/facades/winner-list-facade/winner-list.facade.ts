import { Injectable } from '@angular/core';
import { Winner } from '../../models/winner.model';
import { JsonResponse } from 'src/app/core/models/json-response.model';

/* *
 *  This facade is used to abstract the business logic of normalizing response payload data
 *  from the restful service
 * */
@Injectable()
export class WinnerListFacade {
  constructor() {}

  parseWinnersList(data: JsonResponse): Array<Winner> {
    const winners: Array<Winner> = [];
    data.MRData.RaceTable.Races.forEach(item => {
      winners.push({
        raceName: item.raceName,
        driver: item.Results[0].Driver,
        points: item.Results[0].points,
        time: item.Results[0].Time.time,
        laps: item.Results[0].laps
      });
    });
    return winners;
  }
}
