import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonResponse } from 'src/app/core/models/json-response.model';

@Injectable()
export class WorldChampionApiService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<JsonResponse> {
    const endPoint = `driverStandings/1.json?limit=11&offset=55`;
    const worldChampionEndPoint = environment.baseUrl + endPoint;
    return this.httpClient.get<JsonResponse>(worldChampionEndPoint);
  }
}
