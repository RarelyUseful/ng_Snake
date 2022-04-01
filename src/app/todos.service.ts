import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}
  loadScore(): Observable<JSON> {
    const URL = 'http://scores.chrum.it/scores/snake';
    const Options = {
      // params: {
      //   'auth-token': '1234',
      // },
    };
    return this._http.get<JSON>(URL, Options);
  }
  checkUser(token: number): Observable<JSON> {
    const URL = 'http://scores.chrum.it/check-token';
    const Options = {
      params: {
        'auth-token': token,
      },
    };
    return this._http.get<JSON>(URL, Options);
  }
}
