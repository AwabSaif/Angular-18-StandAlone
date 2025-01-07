import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from "./contactForm/contactForm.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,  FormsModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}
}
