import {Component} from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {
  sharedData: string = '';

  constructor(private myService: MyServiceService) {
    this.sharedData = this.myService.getSharedData();
  }
}
