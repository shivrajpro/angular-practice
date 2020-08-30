import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  serverCreated = false;
  serverName = '';
  serverStatus = '';
  servers = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreated = true;

    let serverObj = { name: "", status: "" };

    serverObj.name = this.serverName;
    serverObj.status = Math.random() > 0.5 ? "Online" : "Offline";


    this.servers.push(serverObj);
    this.serverName = '';
  }

  getColor(index) {

    if(this.servers[index].status.toLowerCase() == "online") return "green";

    return "red";
  }

  getServerStatus(index) {
    return this.servers[index].status.toLowerCase() == "online";
  }
}
