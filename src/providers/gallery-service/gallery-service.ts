import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the GalleryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryServiceProvider {
  //site est notre host. c'est le site hote que lequel se trouve notre api
  //page est le nombre d'élements à afficher par page
   site:string="https://pixabay.com/api";
  
  constructor(public http: Http) {
    console.log('Hello GalleryServiceProvider Provider');
  }
  chercher(query:string,size:number, page:number){
   return(this.http.get(this.site+"/?key=13294167-0bea996738bd65a1d40edb810&q="+query+"&per_page="+size+"$page="+page)
      .map(resp=>resp.json()));    
  }
}
