import { Component } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-test-service',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './test-service.component.html',
  styleUrl: './test-service.component.css'
})
export class TestServiceComponent {
  items: string[] = [];

  constructor(private myService: MyServiceService) {}

  ngOnInit() {                              // lifecycle method
    this.items = this.myService.getItems();
  }
}
