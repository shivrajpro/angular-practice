import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, property: string): any[] {
    if (value.length === 0 || !filterString) {
      return value;
    }

    let filterObjects: any[] = [];
    for (let obj of value) {
      if (obj[property].toLowerCase().includes(filterString.toLowerCase())) {
        filterObjects.push(obj);
      }
    }
    return filterObjects;
  }
}
