import { StandingTable } from './standing-table.model';
import { RaceTable } from './race-table.model';


export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  StandingsTable: StandingTable;
  RaceTable: RaceTable;
}
