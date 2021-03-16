import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
//dynamic component used to show popup after hitting login or signup in authCmp
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }
}
