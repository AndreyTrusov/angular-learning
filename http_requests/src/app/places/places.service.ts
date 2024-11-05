import {inject, Injectable, signal} from '@angular/core';

import {Place} from './place.model';
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces("places", "Something went wrong fetching your favorite places!");
  }

  loadUserPlaces() {
    return this.fetchPlaces("user-places", "Something went wrong fetching your favorite places!"
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      }));
  }

  addPlaceToUserPlaces(place: Place) {
    this.userPlaces.update(prevPlace => [...prevPlace, place]);

    return this.httpClient.put(`http://localhost:3000/user-places/`, {
      placeId: place.id,
    })
  }

  removeUserPlace(place: Place) {
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>('http://localhost:3000/' + url, {
      // observe: 'response'
    }).pipe(
      // map((resData) => resData.body?.places),
      map((resData) => resData.places),
      catchError((error, obs) => {
        console.log(error, obs);
        return throwError(
          // () => new Error("Something went wrong fetching your favorite places!"),
          () => new Error(errorMessage),
        )
      })
    )
  }
}
