import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './game/game.component';

@Pipe({
  name: 'uniqueEvents',
})
export class UniqueEventsPipe implements PipeTransform {
  transform(history: Array<Log>, ln: number): Array<string> {
    let allEvents = history.map((element) => {
      return element.event;
    });
    let unique = [...new Set(allEvents)];
    return unique;
  }
}
