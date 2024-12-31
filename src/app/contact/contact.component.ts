import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule ,CommonModule ,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('تم إرسال البيانات:', this.contactData);
    // هنا يمكنك تنفيذ منطق إرسال البيانات إلى الخادم
  }
  constructor() {}

  ngOnInit() {}
}
