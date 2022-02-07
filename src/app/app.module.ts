import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { LogpipePipe } from './logpipe.pipe';

@NgModule({
  declarations: [AppComponent, IntroComponent, GameComponent, LogpipePipe],
  imports: [BrowserModule, NgxSnakeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
