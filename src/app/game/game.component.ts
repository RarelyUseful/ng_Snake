import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
class Log {
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
  public darkMode = false;
  @Input() playerName: string = '';
  @Output() pReady = new EventEmitter<boolean>();
  public score: number = 0;
  public isRunning: boolean = false;
  counter: number = 0;
  interval: any;
  public time: number = 0;
  public history: Array<Log> = [];
  public showHistory: boolean = false;
  toggleHistory() {
    if (this.showHistory) {
      this.showHistory = false;
    } else this.showHistory = true;
  }
  startTimer() {
    if (this.isRunning === false) {
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
  constructor() {}

  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;

  public startB() {
    if (this.isGameOver === false) {
      if (!this.isRunning) {
        this.history.push({ timestamp: this.time, event: 'Game started' });
      }
      this.startTimer();

      this._snake.actionStart();
    }
    if (this.isGameOver === true) {
      this.isGameOver = false;
      this.history.push({ timestamp: this.time, event: 'Game started' });
      this.startTimer();
      this._snake.actionStart();
    }
  }
  public stopB() {
    if (this.isRunning) {
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
    this._snake.actionUp();
    this.history.push({ timestamp: this.time, event: 'input: UP' });
  }
  public rightB() {
    this._snake.actionRight();
    this.history.push({ timestamp: this.time, event: 'input: RIGHT' });
  }
  public downB() {
    this._snake.actionDown();
    this.history.push({ timestamp: this.time, event: 'input: DOWN' });
  }
  public leftB() {
    this._snake.actionLeft();
    this.history.push({ timestamp: this.time, event: 'input: LEFT' });
  }
  
  public goBack() {
    this.pReady.emit(false);
    window.location.reload();
  }
  public onGrow() {
    console.log('grow');
    this.score++;
    this.history.push({ timestamp: this.time, event: 'Snake GROWS' });
  }
  public isGameOver: boolean = false;
  public onGameOver() {
    this.pauseTimer();
    this.isGameOver = true;
    this.isRunning = false;
    this.history.push({ timestamp: this.time, event: 'Game over' });

    alert(
      `\n Game over :( \n\n Your playtime: ${this.time} \n Your score: ${this.score}`
    );
  }

  ngOnInit(): void {}
}
