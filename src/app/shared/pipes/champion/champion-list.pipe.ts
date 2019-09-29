import { Pipe, PipeTransform } from '@angular/core';
import { Champion } from 'src/app/components/champion/models/champion.model';
import { JsonResponse } from 'src/app/core/models/json-response.model';

@Pipe({
  name: 'championListPipe'
})
export class ChampionListPipe implements PipeTransform {

  transform(jsonResponse: JsonResponse): Array<Champion> {
    const champions: Array<Champion> = [];
    jsonResponse.MRData.StandingsTable.StandingsLists.map(item => {
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
