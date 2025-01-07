import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service1Component } from "./service1/service1.component";
import { Service2Component } from "./service2/service2.component";
import { Service3Component } from "./service3/service3.component";

@Component({
  selector: 'app-servicesPage',
  standalone: true,  
  imports: [RouterModule, Service1Component, Service2Component, Service3Component],
  templateUrl: './servicesPage.component.html',
  styleUrls: ['./servicesPage.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
