export class LoggingService{
    logStatusToConsole(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}