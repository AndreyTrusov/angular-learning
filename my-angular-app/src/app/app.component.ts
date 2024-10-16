import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MySecondCComponent} from './my-second-c/my-second-c.component';
import {TestServiceComponent} from './test-service/test-service.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponentComponent, MySecondCComponent, TestServiceComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-App';
}
