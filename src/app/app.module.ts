import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { LogpipePipe } from './logpipe.pipe';
import { UniqueEventsPipe } from './unique-events.pipe';
import { RouterModule } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    LogpipePipe,
    UniqueEventsPipe,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      { path: 'game', component: GameComponent },
      { path: 'scoreboard', component: ScoreboardComponent },
      { path: '**', redirectTo: '/intro' },
    ]),
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
