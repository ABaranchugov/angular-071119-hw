import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], key: string, value: any): T[] {
    const stringedSearchValue: string = String(value).toLowerCase();

    return items.filter(item => {
      const stringedItemValue = String(item[key]).toLowerCase();

      return item[key] === value ||
        stringedItemValue.includes(stringedSearchValue);
    });
  }
}
