import { Circuit } from './circuit.model';
import { Result } from './result.model';
import { Time } from './time.model';

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Array<Result>;
}
