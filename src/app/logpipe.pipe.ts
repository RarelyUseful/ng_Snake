import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './game/game.component';
@Pipe({
  name: 'logpipe',
})
export class LogpipePipe implements PipeTransform {
  transform(history: Array<Log>, event: string, ln: number): Array<Log> {
    if (event === 'All') {
      return history;
    }

    const filteredList: Array<Log> = [];
    history.forEach((log) => {
      if (log.event === event) {
        filteredList.push(log);
      }
    });
    return filteredList;
  }
}
