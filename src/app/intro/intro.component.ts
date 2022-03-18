import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerinfoService } from '../playerinfo.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(
    private _router: Router,
    private _playerinfo: PlayerinfoService
  ) {}
  // @Output() pName = new EventEmitter<string>();
  // @Output() pReady = new EventEmitter<boolean>();
  ngOnInit(): void {}
  public playerName: string = '';
  public playerEmail: string = '';
  //public isOK: boolean = false;

  public submit() {
    //this.pReady.emit(true);
    //this.pName.emit(this.playerName);
    this._playerinfo.setEmail(this.playerEmail);
    this._playerinfo.setName(this.playerName);
    this._playerinfo.setReady(true);
    this._router.navigate(['/game']);
  }
}
