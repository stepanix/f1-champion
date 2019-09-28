import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { WinnerApiService } from '../../services/apis/winner.api.service';
import { Winner } from '../../models/winner.model';

/* *
 *  This facade is used to abstract the business logic of normalizing response payload data
 *  from the restful service
 * */
@Injectable()
export class WinnerListFacade {
  constructor(private winnerService: WinnerApiService) {}

  listWinners(season: string, drivrId: string): Observable<Array<Winner>> {
    // declare local variable of array type winner
    const winners: Array<Winner> = [];
    /* *
     *  invoke get method of WinnerApiService api service and subscribe.
     *  this call is safe because httpClient calls auto unsubscribe the observable. It means there
     *  is no risk of getting into memory leaks due to opn subscription.
     * */
    this.winnerService.get(season).subscribe(data => {
      // Extract fields and use to rebuild a new desired array suitable for the presentation layer.
      data.MRData.RaceTable.Races.forEach(item => {
        winners.push({
          raceName: item.raceName,
          driver: item.Results[0].Driver,
          points: item.Results[0].points,
          time: item.Results[0].Time.time,
          laps: item.Results[0].laps
        });
      });
    });
    return of(winners);
  }
}
