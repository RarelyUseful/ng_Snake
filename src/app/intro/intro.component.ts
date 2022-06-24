import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerinfoService } from '../services/playerinfo.service';
import { Authorization, TodosService } from '../services/todos.service';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

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
    private _route: ActivatedRoute,
    private _http: HttpClient,
    public fb: FormBuilder
  ) {
    this._route.params.subscribe((params) => {
      this.color = params['color'] || 'normal';
    });
  }

  ngOnInit(): void {}
  public loginForm = this.fb.group({
    name: [
      '',
      {
        validators: [
          Validators.required,
          Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'-])+$"),
          Validators.min(5),
          Validators.max(15),
        ],
        updateOn: 'blur',
      },
    ],
    token: [
      '',
      {
        validators: [
          Validators.required,
          Validators.min(4),
          Validators.max(10),
        ],
        asyncValidators: [],
        updateOn: 'blur',
      },
    ],
  });
  public playerName: string = this._playerinfo.getName(); // EMPTY unless debugging
  public playerToken: string = this._playerinfo.getToken(); // EMPTY unless debugging
  public color = this._playerinfo.getColor();

  public runAuthToken(token: string) {
    this._todos.checkUser(token).subscribe((result: Authorization) => {
      console.log(this.playerToken);
      console.log('Token correct: ', result.success);
      if (result.success) {
        this._playerinfo.setToken(token);
        this._router.navigate(['/game', this.color]);
      } else alert('Wrong token');
    });
  }
  selectColor(color: string): void {
    this._playerinfo.setColor(color);
    this._router.navigate(['/intro', color]);
    console.log('set color: ', color);
  }
  public submit() {
    if (this.playerToken === 'Angular') {
      this._playerinfo.setToken('1234');
      this._playerinfo.setName(this.playerName);
      this._router.navigate(['/game', this.color]);
      //bypass if hoting or API doesn't work
    } else {
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
