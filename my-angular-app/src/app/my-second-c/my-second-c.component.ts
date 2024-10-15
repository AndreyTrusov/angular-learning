import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-my-second-c',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass,
    NgStyle
  ],
  templateUrl: './my-second-c.component.html',
  styleUrl: './my-second-c.component.css'
})
export class MySecondCComponent {
  value: string = "";

  isBul: boolean = false;

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  isActive: boolean = true;

  isHighlighted: boolean = false;

  handleClick() {
    this.value = 'Button was clicked!';
  }

  clickToAppearList() {
    this.isBul = !this.isBul;
  }

}
