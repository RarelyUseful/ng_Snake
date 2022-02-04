import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';

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

  startTimer() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.counter++;
      this.time = this.counter / 10;
    }, 100);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }
  constructor() {}

  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;

  public startB() {
    this.startTimer();
    this._snake.actionStart();
  }
  public stopB() {
    this.pauseTimer();
    this._snake.actionStop();
  }
  public resetB() {
    this.pauseTimer();
    this.counter = 0;
    this.time = 0;
    this._snake.actionReset();
    this.score = 0;
  }

  public upB() {
    this._snake.actionUp();
  }
  public rightB() {
    this._snake.actionRight();
  }
  public downB() {
    this._snake.actionDown();
  }
  public leftB() {
    this._snake.actionLeft();
  }

  public goBack() {
    this.pReady.emit(false);
    window.location.reload();
  }
  public onGrow() {
    console.log('grow');
    this.score++;
  }

  public onGameOver() {
    this.pauseTimer();
    alert(
      `\n Game over :( \n\n Your playtime: ${this.time} \n Your score: ${this.score}`
    );
  }

  ngOnInit(): void {}
}
