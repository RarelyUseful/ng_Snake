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
  // _color: string = 'normal'; // change it to read from local storage
  _color!: string;

  public setName(name: string): void {
    this._playername = name;
  }
  public setEmail(email: string): void {
    this._playeremail = email;
  }
  public setReady(bool: boolean): void {
    this._playerready = bool;
  }
  public setColor(value: string): void {
    this._color = value;
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
  public getisReady(): boolean {
    return this._playerready;
  }
  public getToken(): string {
    return this._playertoken;
  }
  public getColor(): string {
    return this._color;
  }
}
