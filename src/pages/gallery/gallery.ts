import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
//importer l'opérateur map
import "rxjs/add/operator/map";
//ici on vient d'ajouter la GalleryServiceProvider. Elle est autmatiquement ajoutée dans le app.Module.ts
import { GalleryServiceProvider } from '../../providers/gallery-service/gallery-service';
import { DetailsPage } from '../details/details';
import { LoadingController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle: string = "";
  images: any = { hits: [] };
  size: number = 20;
  page: number = 1;
  totalPages: number;
  a: number = 0;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public galleryServiceProvider: GalleryServiceProvider,
    public http: Http,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController) {

    //normalement ici dès qu'on utilise un service, c'est le service qui se chargera de gérer l'envoi des requêtes
    //http. On on pourra enlever celà si GallerieServiceProvider est créé
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  onSearch() {   
    this.images.hits = [] ;
    this.doSearch() ;
    
    //map retourne un objet Observable que je dois convertir en Json  ........Vous devez déclarer la map dans les import

    //sans utiliser le service
    //  this.http.get("https://pixabay.com/api/?key=13294167-0bea996738bd65a1d40edb810&q="+this.motCle+"&per_page=20"+"&page="+this.page)
    // .map(resp=>resp.json())
    // .subscribe(data=>{
    //   this.images=data;

    // }, error=>{
    //   console.log(error);
    // })     
    //en utilisant le service

    //  this.galleryServiceProvider.chercher(this.motCle,this.size,this.page)
    //     .subscribe(data=>{
    //         this.images=data;
    //       }, error=>{
    //         console.log(error);
    //   })  



  }


  doSearch() {
    const loader = this.loadingCtrl.create({
      content: "Patientez ...",
      duration: 3000
    });
    loader.present();

    //pour le infiniteScroll
    this.galleryServiceProvider.chercher(this.motCle, this.size, this.page)
      .subscribe(data => {
        this.totalPages = data.totalHits / this.size;
        if (this.totalPages % this.size != 0) {
          ++this.totalPages;
        }
        data.hits.forEach(element => {
          this.images.hits.push(element)

        });
        loader.dismiss();
      }, error => {
        loader.dismiss();
      })
  }


  //ici on fait le infinite scroll
  doInfinite(infinite) {

    if (this.page < this.totalPages) {
      ++this.page;
      this.doSearch();
      infinite.complete();
    }

  }

  onDetailsImage(a) {

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choisir l\'action',
      buttons: [
        {
          text: 'Annuler',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Details',
          handler: () => {
            // this.navCtrl.push(DetailsPage);
            this.navCtrl.push(DetailsPage, { myImage: a });
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }
}

/* import { ActionSheetController } from 'ionic-angular';

export class MyPage {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  presentActionSheet() {

  }
}*/