import { Race } from './race.model';

export interface RaceTable {
  season: string;
  position: string;
  Races: Array<Race>;
}
