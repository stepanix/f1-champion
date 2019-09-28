import { DriverStanding } from './driver-standing.model';

export interface Standing {
    season: string;
    round: string;
    DriverStandings: Array<DriverStanding>;
}
