import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
@Injectable()
export class NotificationComponent {

  message: string = '';
  showNotification: boolean = false;
  notificationType: string = '';

  constructor() {
   }

   public error(message: string): void {
    this.message = message;
    this.notificationType = 'is-danger';
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
   }
}
