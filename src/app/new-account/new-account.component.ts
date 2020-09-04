import { Component } from '@angular/core';
import { LoggingService } from "../services/logging.service";
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService, AccountsService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusToConsole(accountStatus);
  }
}
