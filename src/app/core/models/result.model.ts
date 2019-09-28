import { Constructor } from './constructor.model';
import { Driver } from './driver.model';
import { Time } from './time.model';


export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
}
