import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], query: string, propName: string): any[] {
    const result = [];
    if(!value || !query || !propName) return value;

    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(query.toLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
