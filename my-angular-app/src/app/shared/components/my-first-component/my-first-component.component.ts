import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CalculatorServiceService} from '../../../core/configs/calculator-service.service';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {
  name: string = '';

  private calculatorService = inject(CalculatorServiceService);
  totalCost: number = this.calculatorService.add(10, 50);
}
