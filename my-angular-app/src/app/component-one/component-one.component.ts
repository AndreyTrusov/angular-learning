import {Component} from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {
  constructor(private myService: MyServiceService) {
  }

  updateSharedData() {
    this.myService.setSharedData("Data updated by Component One");
  }
}
