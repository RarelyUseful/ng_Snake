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
export interface ScoresPosting {
  name: string;
  game: string;
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}

  loadScore(): Observable<ScoresFromApi> {
    const URL = 'https://scores.chrum.it/scores/snake';
    const headers = new HttpHeaders({ accept: 'application/json' });
    const Options = {
      headers,
    };
    return this._http.get<ScoresFromApi>(URL, Options);
  }
  checkUser(token: string): Observable<Authorization> {
    const URL = 'https://scores.chrum.it/check-token';
    const headers = new HttpHeaders({
      accept: 'application/json',
    });
    const body = { 'auth-token': token };
    const Options = { headers };
    return this._http.post<Authorization>(URL, body, Options);
  }
  postScore(
    playername: string,
    playerscore: number,
    token: string
  ): Observable<ScoresPosting> {
    const URL = 'https://scores.chrum.it/scores';
    const headers = new HttpHeaders({
      accept: 'application/json',
      'auth-token': token,
    });
    const body = {
      name: playername,
      game: 'snake',
      score: playerscore,
    };
    const Options = { headers };
    return this._http.post<ScoresPosting>(URL, body, Options);
  }
}
