import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ScoresFromApi, TodosService } from '../services/todos.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  public data: any = [];
  public dataSortedDesc: any[] = [];
  public showBestScores: boolean = true;
  public showMyScores: boolean = false;
  public playerName: string = localStorage.getItem('name') || '';
  private _sub$: Subscription;
  constructor(
    public activeModal: NgbActiveModal,
    private _todos: TodosService
  ) {
    const myObservable = this._todos.loadScore();
    const myObserver = {
      next: (result: ScoresFromApi) => {
        this.data = result;
        this.dataSortedDesc = this.data.sort(
          (a: any, b: any) => b.score - a.score
        );
      },
      error: (err: Error) => console.error(err),
      complete: () => console.log('Finished'),
    };
    this._sub$ = timer(0, 3000)
      .pipe(switchMap(() => myObservable))
      .subscribe(myObserver);
  }

  ngOnInit(): void {
    console.log('Modal created');
  }
  ngOnDestroy(): void {
    this._sub$.unsubscribe();
    console.log('Modal destroyed');
  }
}
