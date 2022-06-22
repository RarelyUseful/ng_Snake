import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerinfoService } from '../playerinfo.service';
import { Authorization, TodosService } from '../todos.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(
    private _router: Router,
    private _playerinfo: PlayerinfoService,
    private _todos: TodosService
  ) {}
  // @Output() pName = new EventEmitter<string>();
  // @Output() pReady = new EventEmitter<boolean>();
  ngOnInit(): void {}

  public playerName: string = '';
  public playerEmail: string = '';
  public playerToken: string = '';

  public runAuthToken(token: string) {
    this._todos.checkUser(token).subscribe((result: Authorization) => {
      console.log(this.playerToken);
      console.log(result);
      if (result.success) {
        this._playerinfo.setReady(true);
        this._playerinfo.setToken(token);

        this._router.navigate(['/game']);
      } else alert('Wrong token');
    });
  }
  public submit() {
    //this.pReady.emit(true);
    //this.pName.emit(this.playerName);
    //this._playerinfo.setEmail(this.playerEmail);
    this.runAuthToken(this.playerToken);
    this._playerinfo.setName(this.playerName);
  }
}
