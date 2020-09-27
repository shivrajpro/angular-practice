import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        // value = (<string>value).replace("Server","(S)");

        // value = (<string>value).replace("Database","(DB)");

        // return value;
        // console.log("args",args);
        
        if(value.length > args[0]){
            return value.substr(0, args[0])+ '...';
        }
        return value;
    }

}