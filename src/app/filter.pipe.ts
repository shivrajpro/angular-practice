import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //leads to performance issues as the transform function executes everytime the data changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propName:string) {
    if(value.length === 0 || filterString=='')
      return value;

    const propArray = [];
    for (const item of value) {
      if(item[propName] == filterString)
        propArray.push(item);
    }

    return propArray;
  }

}
