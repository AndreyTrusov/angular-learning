import {inject, Injectable, signal} from '@angular/core';

import {Place} from './place.model';
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap, throwError} from "rxjs";
import {ErrorService} from "../shared/error.service";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
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
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient.put(`http://localhost:3000/user-places/`, {
      placeId: place.id,
    }).pipe(
      catchError(() => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError(`Failed to add place to favorite places`);
        return throwError(() => new Error(`Failed to add place to place ${place.id}`));
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set(prevPlaces.filter((p) => p.id !== place.id));
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/` + place.id).pipe(
      catchError(() => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError(`Failed to remove from favorite places`);
        return throwError(() => new Error(`Failed to add place to place ${place.id}`));
      })
    );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>('http://localhost:3000/' + url,
      // {
      // observe: 'response'
      // }
    ).pipe(
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
