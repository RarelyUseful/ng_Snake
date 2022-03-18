import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerinfoService {
  constructor() {}
  _playername!: string;
  _playeremail!: string;
  _playerready: boolean = false;

  public setName(name: string): void {
    this._playername = name;
  }
  public setEmail(email: string): void {
    this._playeremail = email;
  }
  public setReady(bool: boolean): void {
    this._playerready = bool;
  }
  public getName(): string {
    return this._playername;
  }
  public getEmail(): string {
    return this._playeremail;
  }
  public get isReady() {
    return this._playerready;
  }
}
