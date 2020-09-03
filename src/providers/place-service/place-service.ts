// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../../model/place.model';
import { Storage } from "@ionic/storage" ;

/*
  Generated class for the PlaceServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceServiceProvider {
  private places:Array<Place>= [
    { title: "A" },
    { title: "B" },
    { title: "C" },
    { title: "D" }
  ] ;
  
  constructor(
    // public http: HttpClient
    public strorage: Storage
    ) {
    console.log('Hello PlaceServiceProvider Provider');
  }

  addPlace(place: Place) {
    this.places.push(place);
    this.strorage.set('places', this.places) ;
  }

  getAllPlaces() {
    return this.strorage.get('places').then(data=> {
      this.places = data!= null ? data : [] ;
      return this.places;
    })  ;
  }
}
