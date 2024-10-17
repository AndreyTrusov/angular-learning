import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  add(x: number, y: number) {
    return x + y;
  }

  constructor() {
  }
}
