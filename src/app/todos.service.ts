import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ScoresFromApi {
  name: string;
  score: number;
}
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}

  loadScore(): Observable<ScoresFromApi> {
    const URL = 'http://scores.chrum.it/scores/snake';
    const headers = new HttpHeaders({ accept: 'application/json' });
    const Options = {
      headers,
      // params: {
      //   'auth-token': '1234',
      // },
    };
    return this._http.get<ScoresFromApi>(URL, Options);
  }
  checkUser(token: number): Observable<boolean> {
    const URL = 'http://scores.chrum.it/check-token';
    const Options = {
      params: {
        'auth-token': token,
      },
    };
    return this._http.get<boolean>(URL, Options);
  }
}
