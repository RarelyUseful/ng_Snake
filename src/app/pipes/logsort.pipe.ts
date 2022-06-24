import { Pipe, PipeTransform } from '@angular/core';
import { Log } from '../game/game.component';

@Pipe({
  name: 'logsort',
})
export class LogsortPipe implements PipeTransform {
  transform(history: Array<Log>, event: string, ln: number): Array<Log> {
    if (event === 'Asc') {
      return history;
    }

    const filteredList: Array<Log> = history.slice().reverse();
    return filteredList;
  }
}
