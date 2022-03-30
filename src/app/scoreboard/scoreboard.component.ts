import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerinfoService } from '../playerinfo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  constructor(
    private _router: Router,
    private _playerinfo: PlayerinfoService,
    public activeModal: NgbActiveModal
  ) {
    if (!this._playerinfo.isReady) {
      this._router.navigate(['/intro']);
    }
  }
  public goBack() {
    // this.pReady.emit(false);
    //window.location.reload();
    this._router.navigate(['/game']);
  }
  ngOnInit(): void {}
}
