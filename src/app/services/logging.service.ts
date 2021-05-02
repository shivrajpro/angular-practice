import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class LoggingService{
    lastLog: string = '1st log';

    printLog(message: string){
        // console.log('msg',message);
        // console.log('lastLog', this.lastLog);
        this.lastLog = message;
    }
}