import { Winner } from 'src/app/components/winner/models/winner.model';
import { driverStub } from './driver.stub';

export const winnerStub: Array<Winner> = [
    {
      raceName: 'Mock Race',
      driver: driverStub,
      points: '10',
      time: '1.27',
      laps: '20'
    }
  ];
