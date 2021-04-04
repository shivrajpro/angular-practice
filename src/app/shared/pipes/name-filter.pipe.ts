import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nameFilter'
})

export class NameFilterPipe implements PipeTransform {
    transform(values: any[], name: string) {
        // console.log('>> in pipe', values,' name',name);
        return values.filter(recipe => recipe.name.toLowerCase().includes(name));
    }
}