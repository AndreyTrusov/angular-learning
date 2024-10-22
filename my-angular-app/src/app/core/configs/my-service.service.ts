import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',  // Global provider
})
export class MyServiceService {
  constructor() { }

  getItems(): string[] {
    return ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  }

  getMessage(): string {
    return 'Hello from MyService!';
  }

  private sharedData: string = 'Initial Data';

  getSharedData(): string {
    return this.sharedData;
  }

  setSharedData(newData: string): void {
    this.sharedData = newData;
  }
}
