import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MySecondCComponent} from './my-second-c/my-second-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponentComponent, MySecondCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-App';
}
