import { JsonResponse } from 'src/app/core/models/json-response.model';
import { driverStub } from './driver.stub';
import { circuitStub } from './circuit.stub';
import { resultStub } from './result.stub';

export const jsonResponseStub: JsonResponse = {
    MRData: {
      xmlns: 'http://ergast.com/mrd/1.4',
      series: 'f1',
      url: 'http://ergast.com/api/f1/driverstandings/1.json',
      limit: '11',
      offset: '55',
      total: '69',
      StandingsTable: {
        driverStandings: '1',
        StandingsLists: [
          {
            season: '2005',
            round: '1',
            DriverStandings: [
              {
                position: '1',
                positionText: '1',
                points: '10',
                wins: '5',
                Driver: driverStub
              }
            ]
          }
        ]
      },
      RaceTable: {
        season: '2005',
        position: '1',
        Races: [{
          season: '2005',
          round: '1',
          url: '',
          raceName: 'Mock Race',
          Circuit: circuitStub,
          date: 'date',
          time: '1.27',
          Results: [resultStub]
        }]
      }
    }
  };
