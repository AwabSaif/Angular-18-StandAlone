import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../notification/notification.service';
import { NotificationComponent } from "../../notification/notification/notification.component";



interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contactForm',
  standalone: true,
  imports: [RouterModule, FormsModule, NotificationComponent],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      this.notificationService.showNotification('تم إرسال الرسالة بنجاح!', 'success');
      console.log(' :تم إرسال الرسالة بنجاح!'+ this.contactData);
      
      this.resetForm();
    } else {
      console.error(' حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
      this.notificationService.showNotification('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.', 'error');
    }
  }
 
  resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
