import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

import { ServersService } from "../servers.service";

interface MyServer{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<MyServer>{

    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyServer> | Promise<MyServer> | MyServer {
        return this.serversService.getServer(+route.params['id']);
    }

}