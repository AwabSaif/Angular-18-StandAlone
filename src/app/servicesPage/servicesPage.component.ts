import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicesPage',
  standalone: true,  
  imports: [RouterModule],
  templateUrl: './servicesPage.component.html',
  styleUrls: ['./servicesPage.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
