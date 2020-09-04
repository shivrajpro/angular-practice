import { Component, Input } from '@angular/core';
import { LoggingService } from "../services/logging.service";
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accuntsService: AccountsService){}

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    this.accuntsService.updateStatus(this.id, status);
    // this.loggingService.logStatusToConsole(status);
  }
}
