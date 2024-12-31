import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,  
    imports: [CommonModule, RouterModule], 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email = "awabtaz9090@gmail.com";
  address = " شارع.....، جدة، السعودية"
  constructor() { }

  ngOnInit() {
  }

}
