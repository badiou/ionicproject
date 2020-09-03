import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacePage } from '../pages/place/place';

//il est difficile à importer.......
import { HttpModule } from '@angular/http';
import { GalleryServiceProvider } from '../providers/gallery-service/gallery-service';
import { DetailsPage } from '../pages/details/details';
import { GagaProvider } from '../providers/gaga/gaga';
import { PlaceServiceProvider } from '../providers/place-service/place-service';
import { NewPlacePage } from '../pages/new-place/new-place';

import { Geolocation } from '@ionic-native/geolocation';
import { DetailPlacePage } from '../pages/detail-place/detail-place';

import { AgmCoreModule } from '@agm/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacePage,
    DetailsPage,
    NewPlacePage,
    DetailPlacePage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__PlacesDatabase',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ6k7qZ2EXK_K7dYDvhnHM0DjQJ0YtjBc'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacePage,
    DetailsPage,
    NewPlacePage,
    DetailPlacePage
    
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GalleryServiceProvider,
    GagaProvider,
    PlaceServiceProvider,
    Camera
  ]
})
export class AppModule {}
