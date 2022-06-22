import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ScoresFromApi {
  name: string;
  score: number;
}
export interface Authorization {
  success: boolean;
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
    };
    return this._http.get<ScoresFromApi>(URL, Options);
  }
  checkUser(token: string): Observable<Authorization> {
    const URL = 'http://scores.chrum.it/check-token';
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'applicaion/json',
    });
    const body = { 'auth-token': token };
    const Options = {};
    return this._http.post<Authorization>(URL, body, Options);
  }
}
