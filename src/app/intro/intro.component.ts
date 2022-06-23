import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private _todos: TodosService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      this.color = params['color'];
    });
  }

  // @Output() pName = new EventEmitter<string>();
  // @Output() pReady = new EventEmitter<boolean>();
  ngOnInit(): void {}

  public playerName: string = '';
  public playerEmail: string = '';
  public playerToken: string = '';
  public color: string = '';

  public runAuthToken(token: string) {
    this._todos.checkUser(token).subscribe((result: Authorization) => {
      console.log(this.playerToken);
      console.log(result);
      if (result.success) {
        this._playerinfo.setReady(true);
        this._playerinfo.setToken(token);

        this._router.navigate(['/game', this.color]);
      } else alert('Wrong token');
    });
  }
  selectColor(color: string): void {
    this._router.navigate(['/intro', color]);
    console.log('set color: ', color);
  }
  public submit() {
    if (this.playerToken === 'Angular') {
      this._router.navigate(['/game', this.color]);
      //bypass if hoting or API doesn't work
    } else {
      //this._playerinfo.setEmail(this.playerEmail); //old functionality
      this.runAuthToken(this.playerToken);
      this._playerinfo.setName(this.playerName);
    }
  }
  public switchColors() {
    if (this.color === 'contrast') {
      this.selectColor('normal');
    } else {
      this.selectColor('contrast');
    }
  }
}
