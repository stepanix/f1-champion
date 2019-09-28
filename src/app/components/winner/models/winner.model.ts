import { Driver } from 'src/app/core/models/driver.model';

export interface Winner {
  raceName: string;
  driver: Driver;
  points: string;
  laps: string;
  time: string;
}
