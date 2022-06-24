import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { LogpipePipe } from './pipes/logpipe.pipe';
import { UniqueEventsPipe } from './unique-events.pipe';
import { RouterModule } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PlayerDataGuardService } from './services/player-data-guard.service';
import { MyResultsPipe } from './pipes/my-results.pipe';
import { SortResultsPipe } from './pipes/sort-results.pipe';
import { LogsortPipe } from './pipes/logsort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    LogpipePipe,
    UniqueEventsPipe,
    ScoreboardComponent,
    MyResultsPipe,
    SortResultsPipe,
    LogsortPipe,
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'intro/:color',
        component: IntroComponent,
      },
      {
        path: 'game/:color',
        component: GameComponent,
        canActivate: [PlayerDataGuardService],
      },
      {
        path: 'scoreboard',
        component: ScoreboardComponent,
        canActivate: [PlayerDataGuardService],
      },
      {
        path: '**',
        component: IntroComponent,
        canActivate: [PlayerDataGuardService],
      },
    ]),
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
