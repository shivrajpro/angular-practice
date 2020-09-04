import { Component, OnInit } from '@angular/core';
import { AccountsService } from "./services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name:string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts =  this.accountsService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsService.addAccount(newAccount.name, newAccount.status);
    // this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountsService.updateStatus(updateInfo.id, updateInfo.newStatus);
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
