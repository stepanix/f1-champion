import { Driver } from 'selenium-webdriver/chrome';
import { Constructor } from './constructor.model';
import { Time } from '@angular/common';


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
