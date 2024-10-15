import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-my-second-c',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './my-second-c.component.html',
  styleUrl: './my-second-c.component.css'
})
export class MySecondCComponent {
  value: string = "";
}
