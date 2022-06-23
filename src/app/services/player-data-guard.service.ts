import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { PlayerinfoService } from './playerinfo.service';
@Injectable({
  providedIn: 'root',
})
export class PlayerDataGuardService implements CanActivate {
  private _color!: string;
  canActivate(): boolean {
    console.log('Guard actiated');

    if (this._playerinfo.getName()) {
      return true;
    } else {
      this._router.navigate(['/intro', this._color]);
      return false;
    }
  }
  constructor(
    private _playerinfo: PlayerinfoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      this._color = params['color'] || 'normal';
      this._playerinfo.setColor(this._color);
    });
  }
}
