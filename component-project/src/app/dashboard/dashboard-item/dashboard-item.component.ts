import {Component, input, Input} from '@angular/core';
import {TrafficComponent} from "../traffic/traffic.component";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [
    TrafficComponent
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: { src: string; alt: string };
  // @Input({required: true}) title!: string;

  image = input.required<{ src: string; alt: string }>()
  title = input.required<string>()

}
