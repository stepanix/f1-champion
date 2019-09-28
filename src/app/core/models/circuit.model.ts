import { Location } from './location.model';

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}
