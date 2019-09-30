import { Injectable } from '@angular/core';
import { JsonResponse } from 'src/app/core/models/json-response.model';
import { Winner } from '../../models/winner.model';

@Injectable()
export class WinnerListFacade {

  constructor() { }

  parse(jsonResponse: JsonResponse): Array<Winner> {
    const winners: Array<Winner> = [];
    jsonResponse.MRData.RaceTable.Races.forEach(item => {
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
