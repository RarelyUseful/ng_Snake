import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerinfoService {
  constructor() {}
  _playername!: string;
  _playeremail!: string;
  _playerready: boolean = false; // FALSE unless debugging
  _playertoken!: string;

  public setName(name: string): void {
    this._playername = name;
  }
  public setEmail(email: string): void {
    this._playeremail = email;
  }
  public setReady(bool: boolean): void {
    this._playerready = bool;
  }
  public setToken(token: string): void {
    this._playertoken = token;
  }
  public getName(): string {
    return this._playername;
  }
  public getEmail(): string {
    return this._playeremail;
  }
  public isReady() {
    return this._playerready;
  }
  public getToken(): string {
    return this._playertoken;
  }
}
