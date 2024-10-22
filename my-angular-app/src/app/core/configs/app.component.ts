import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Routes} from '@angular/router';
import {MyFirstComponentComponent} from '../../shared/components/my-first-component/my-first-component.component';
import {MySecondCComponent} from '../../shared/components/my-second-c/my-second-c.component';
import {TestServiceComponent} from '../services/test-service/test-service.component';
import {CommonModule, NgForOf} from '@angular/common';

import {MyServiceService} from './my-service.service';
import {ComponentOneComponent} from '../../shared/components/component-one/component-one.component';
import {ComponentTwoComponent} from '../../shared/components/component-two/component-two.component';
import {TestServiceConnectionComponent} from '../services/test-service-connection/test-service-connection.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyFirstComponentComponent,
    MySecondCComponent,
    TestServiceComponent,
    NgForOf,
    RouterLink,
    ComponentOneComponent,
    ComponentTwoComponent,
    TestServiceConnectionComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
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
