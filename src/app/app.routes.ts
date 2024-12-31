import { Routes } from '@angular/router';
import { ServicesPageComponent } from './servicesPage/servicesPage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];
