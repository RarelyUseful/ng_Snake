import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor() {}
  @Output() pName = new EventEmitter<string>();
  @Output() pReady = new EventEmitter<boolean>();
  ngOnInit(): void {}
  @Input() playerName: string = '';

  public playerEmail: string = '';
  public isOK: boolean = false;

  public submit() {
    this.pReady.emit(true);
    this.pName.emit(this.playerName);
  }
}
