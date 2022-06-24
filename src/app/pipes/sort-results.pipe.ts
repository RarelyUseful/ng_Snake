import { Pipe, PipeTransform } from '@angular/core';
import { ScoresFromApi } from '../services/todos.service';

@Pipe({
  name: 'sortResults',
})
export class SortResultsPipe implements PipeTransform {
  transform(data: Array<ScoresFromApi>, bool: boolean): Array<ScoresFromApi> {
    if (bool) {
      return data;
    } else {
      const newdata = data.slice().reverse();
      return newdata;
    }
  }
}
