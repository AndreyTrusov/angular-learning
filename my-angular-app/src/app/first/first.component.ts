import { Component } from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}


