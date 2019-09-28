import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonResponse } from 'src/app/core/models/json-response.model';


@Injectable()
export class WinnerApiService {
  constructor(private httpClient: HttpClient) {}

  get(season: string): Observable<JsonResponse> {
    const endPoint = `${season}/results/1.json`;
    const winnerEndPoint = environment.baseUrl + endPoint;
    return this.httpClient.get<JsonResponse>(winnerEndPoint);
  }
}
