import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // استيراد RouterModule

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nav: Nav[] = [
    { link: '/', name: 'الصفحة الرئيسية', exact: true },
    { link: '/about', name: 'من نحن', exact: true },
    { link: '/services', name: 'خدمتنا', exact: true },
    { link: '/contact', name: 'توصل معنا', exact: true }
  ];

  constructor() {}

  ngOnInit(): void {}
}
