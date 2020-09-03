import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlaceServiceProvider } from '../../providers/place-service/place-service';
import { NewPlacePage } from '../new-place/new-place';
import { DetailPlacePage } from '../detail-place/detail-place';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  places:Array<Place>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public placesService: PlaceServiceProvider) {
  }

  ionViewWillEnter() {
    this.placesService.getAllPlaces().then(data=> {
      this.places = data ;
    }) ;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onNewPlace() {
    this.navCtrl.push(NewPlacePage) ; ;
  }

  onDetailPlace(place:Place) {
    this.navCtrl.push(DetailPlacePage, {place: place}) ;
  }

}
