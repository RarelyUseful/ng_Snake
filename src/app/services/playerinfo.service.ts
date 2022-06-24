import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerinfoService {
  constructor() {}
  _playername: string = this.getName();
  _playeremail!: string;
  _playertoken!: string;
  _color: string = this.getColor();

  //Setters:
  public setName(name: string): void {
    this._playername = name;
    localStorage.setItem('name', name);
  }
  public setEmail(email: string): void {
    this._playeremail = email;
    localStorage.setItem('email', email);
  }
  public setColor(value: string): void {
    this._color = value;
    localStorage.setItem('color', value);
  }
  public setToken(token: string): void {
    this._playertoken = token;
    //don't store token in localstorage
  }

  //Getters:
  public getName(): string {
    return localStorage.getItem('name') || '';
  }
  public getEmail(): string {
    return localStorage.getItem('email') || '';
  }
  public getToken(): string {
    return this._playertoken;
  }
  public getColor(): string {
    return localStorage.getItem('color') || '';
  }
}
