import {Pipe, PipeTransform} from '@angular/core';
import {IEntity} from '../models/entity.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform<T>(items: T[], key: string, value: any): T[] {
    const stringedSearchValue: string = String(value).toLowerCase();

    return items.filter((item: IEntity) => {
      const stringedItemValue = String(item[key]).toLowerCase();

      return item[key] === value || stringedItemValue.includes(stringedSearchValue);
    });
  }
}
