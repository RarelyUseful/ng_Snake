import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerinfoService } from '../playerinfo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from '../todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  public data: any = [
    {
      name: 'Testscr',
      score: 10,
    },
  ];
  public scores = this.data.map((e: any) => {
    return e.name + ' : ' + e.score;
  });

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
      this.data.push(result);
      console.log(result);
    });
  }
  public goBack() {
    // this.pReady.emit(false);
    //window.location.reload();
    this._router.navigate(['/game']);
  }

  ngOnInit(): void {}
}
