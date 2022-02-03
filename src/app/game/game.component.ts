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
  public darkMode = true;
  @Input() playerName: string = '';
  @Output() pReady = new EventEmitter<boolean>();
  public score: number = 0;
  constructor() {}
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;

  public onStart() {
    this._snake.actionStart();
  }
  public onStop() {
    this._snake.actionStop();
  }
  public onReset() {
    this._snake.actionReset();
  }
  public goBack() {
    this.pReady.emit(false);
    this.onStop();
    this.onReset();
  }
  public onGrow() {
    console.log('grow');
    this.score++;
  }

  public onGameOver() {
    alert(`Game over. :( \nYour score: ${this.score}`);
  }

  ngOnInit(): void {}
}
