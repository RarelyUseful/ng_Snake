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

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    LogpipePipe,
    UniqueEventsPipe,
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      { path: 'game', component: GameComponent },
      { path: '**', redirectTo: '/intro' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
