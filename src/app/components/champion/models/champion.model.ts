import { Driver } from 'src/app/core/models/driver.model';


export interface Champion {
  season: string;
  round: string;
  position: string;
  points: string;
  driver: Driver;
}
