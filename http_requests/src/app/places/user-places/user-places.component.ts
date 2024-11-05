import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import {Place} from "../place.model";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  isFetching = signal(false);
  error = signal('');
  // places = signal<Place[] | undefined>(undefined);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadUserPlaces();

  ngOnInit() {
    this.isFetching.set(true);
    const subscription =
      this.placesService.loadUserPlaces().subscribe({
      // next: (resData) => {
      //   console.log(resData);
      //   this.places.set(resData);
      // }
      // next: (places) => {
      //   this.places.set(places);
      // },
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
