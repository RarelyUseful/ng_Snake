import { Pipe, PipeTransform } from '@angular/core';
import { ScoresFromApi } from '../services/todos.service';

@Pipe({
  name: 'myResults',
})
export class MyResultsPipe implements PipeTransform {
  transform(player: Array<ScoresFromApi>, bool: boolean): Array<ScoresFromApi> {
    if (bool) {
      const filteredList: Array<ScoresFromApi> = [];
      const playerName: string = localStorage.getItem('name') || '';
      player.forEach((score) => {
        if (score.name === playerName) {
          filteredList.push(score);
        }
      });
      return filteredList;
    } else return player;
  }
}
