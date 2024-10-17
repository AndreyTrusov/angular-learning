import {Component, inject} from '@angular/core';
import {CalculatorServiceService} from '../calculator-service.service';

@Component({
  selector: 'app-test-service-connection',
  standalone: true,
  imports: [],
  templateUrl: './test-service-connection.component.html',
  styleUrl: './test-service-connection.component.css'
})
export class TestServiceConnectionComponent {
  private calculatorService = inject(CalculatorServiceService)
  totalCost: number = this.calculatorService.add(5, 5);
}
