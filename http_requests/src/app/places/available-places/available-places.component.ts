import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import {Place} from '../place.model';
import {PlacesComponent} from '../places.component';
import {PlacesContainerComponent} from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal('');
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  // contructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places', {
      observe: 'response'
    }).pipe(
      map((resData) => resData.body?.places),
      catchError((error, obs) => {
        console.log(error, obs);
        return throwError(
          () => new Error("Something went wrong!"),
        )
      })
    ).subscribe({
      next: (resData) => {
        console.log(resData);
        this.places.set(resData);
      },
      error: (error: Error) => {
        console.log(error); // sending error message to analytical server maybe
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
