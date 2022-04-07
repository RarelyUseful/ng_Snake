import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerinfoService } from '../playerinfo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosService, ScoresFromApi } from '../todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  public data: any = [];
  public dataS: any;
  constructor(
    private _router: Router,
    private _playerinfo: PlayerinfoService,
    public activeModal: NgbActiveModal,
    private _todos: TodosService
  ) {
    if (!this._playerinfo.isReady) {
      this._router.navigate(['/intro']);
    }
    this._todos.loadScore().subscribe((result) => {
      this.data = result;

      //this sorting should go to pipe
      this.dataS = this.data.sort((a: any, b: any) => b.score - a.score);

      //console.log(result);
    });
  }
  public goBack() {
    // this.pReady.emit(false);
    //window.location.reload();
    this._router.navigate(['/game']);
  }

  ngOnInit(): void {}
}
