import {
  NgbActiveModal,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerinfoService } from '../services/playerinfo.service';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { TodosService, ScoresPosting } from '../services/todos.service';

export class Log {
  timestamp: number;
  event: string;

  constructor(timestamp: number, event: string) {
    this.timestamp = timestamp;
    this.event = event;
  }
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  //public darkMode: boolean = false;
  public playerName = this._playerinfo.getName();
  public color = this._playerinfo.getColor();
  public score: number = 0;
  public isRunning: boolean = false;
  public isGameOver: boolean = false;

  counter: number = 0;
  interval: any;
  public time: number = 0;
  public history: Array<Log> = [];
  public currentEvent: string = 'All';
  public showHistory: boolean = false;
  constructor(
    private _router: Router,
    private _playerinfo: PlayerinfoService,
    public modalService: NgbModal,
    private _todos: TodosService,
    private _route: ActivatedRoute
  ) {
    // if (!this._playerinfo.getisReady()) {
    //   this._router.navigate(['/intro', this.color]);
    // }
    this._route.params.subscribe((params) => {
      this.color = params['color'];
    });
  }
  ngOnInit(): void {}

  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  toggleHistory() {
    // might not be needed
    this.showHistory = !this.showHistory;
  }

  startTimer() {
    if (this.isRunning === false) {
      // Fixed: prevent multipe instances of timer
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.counter++;
        this.time = this.counter / 20;
      }, 50);
    }
  }
  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }
  public startB() {
    if (this.isGameOver === false) {
      if (!this.isRunning) {
        // Fixed: prevent multiple logging of "Game started"
        this.history.push({ timestamp: this.time, event: 'Game started' });
      }
      this.startTimer();

      this._snake.actionStart();
    }
    if (this.isGameOver === true) {
      // Fixed: after gameover when you press start - timer starts, but game is still frozen.
      this.isGameOver = false;
      this.resetB();
      this.history.push({ timestamp: this.time, event: 'Game started' });
      // 2nd way to make pipe aware of changes in var history:
      // this.history = [
      //   ...this.history,
      //   { timestamp: this.time, event: 'Game started' }
      // ]
      this.startTimer();
      this._snake.actionStart();
    }
  }
  public stopB() {
    if (this.isRunning) {
      // Fixed: prevent multiple logging of "Game stpped"
      this.history.push({ timestamp: this.time, event: 'Game stopped' });
    }
    this.pauseTimer();
    this._snake.actionStop();
  }
  public resetB() {
    this.pauseTimer();
    this.counter = 0;
    this.time = 0;
    this._snake.actionReset();
    this.score = 0;
    this.history = [];
  }

  public upB() {
    if (!this.isRunning) {
      this.startB();
    }
    this._snake.actionUp();
    this.history.push({ timestamp: this.time, event: 'input UP' });
  }
  public rightB() {
    if (!this.isRunning) {
      this.startB();
    }

    this._snake.actionRight();
    this.history.push({ timestamp: this.time, event: 'input RIGHT' });
  }
  public downB() {
    if (!this.isRunning) {
      this.startB();
    }
    this._snake.actionDown();
    this.history.push({ timestamp: this.time, event: 'input DOWN' });
  }
  public leftB() {
    if (!this.isRunning) {
      this.startB();
    }
    this._snake.actionLeft();
    this.history.push({ timestamp: this.time, event: 'input LEFT' });
  }

  public goBack() {
    // this.pReady.emit(false);
    //window.location.reload();
    this._router.navigate(['/intro', this.color]);
  }
  public onGrow() {
    console.log('grow');
    this.score++;
    this.history.push({ timestamp: this.time, event: 'Snake GROWS' });
  }
  public onGameOver() {
    this.pauseTimer();
    this.isGameOver = true;
    this.isRunning = false;
    this.history.push({ timestamp: this.time, event: 'Game over' });
    this.runPostScore(this.playerName, this.score);

    alert(
      `\n Game over :( \n\n Your playtime: ${this.time} \n Your score: ${this.score}`
    );
  }

  public runPostScore(name: string, playerscore: number) {
    this._todos
      .postScore(name, playerscore, this._playerinfo.getToken())
      .subscribe((result: ScoresPosting) => {
        console.log(result);
      });
  }

  openModal() {
    this.modalService.open(ScoreboardComponent);
  }

  selectColor(color: string): void {
    this._router.navigate(['/game', color]);
    console.log('set color: ', color);
  }
  public switchColors() {
    if (this.color === 'contrast') {
      this.selectColor('normal');
    } else {
      this.selectColor('contrast');
    }
  }
}
