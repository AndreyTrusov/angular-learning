import { Component} from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MySecondCComponent} from './my-second-c/my-second-c.component';
import {TestServiceComponent} from './test-service/test-service.component';
import {NgForOf} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MyServiceService} from './my-service.service';
import {ComponentOneComponent} from './component-one/component-one.component';
import {ComponentTwoComponent} from './component-two/component-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },       // Default route
  { path: 'about', component: AboutComponent }, // Route to the about page
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponentComponent, MySecondCComponent, TestServiceComponent, NgForOf, RouterLink, ComponentOneComponent, ComponentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular App with Service';
  message: string;

  constructor(private myService: MyServiceService) {  // Inject service in the constructor
    this.message = this.myService.getMessage();       // Use the service method
  }
}
