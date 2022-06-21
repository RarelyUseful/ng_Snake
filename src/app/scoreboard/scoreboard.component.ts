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
  public dataSortedDesc: any[] = [];
  public dataSortedAsc: any[] = [];
  public showBestScores: boolean = true;
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
      this.dataSortedDesc = this.data.sort(
        (a: any, b: any) => b.score - a.score
      );
      this.dataSortedAsc = this.data
        .slice()
        .sort((a: any, b: any) => a.score - b.score);
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
