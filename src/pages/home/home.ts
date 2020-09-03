import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact ={
    nom:'OURO-BANG\'NA BADIOU',
    tel:'90692463',
    photo:'assets/imgs/image.jpg',
    email:'ourobadiou@gmail.com',
    date:'03/06/1987',
    lorem: 'Quand votre attitude est juste, les faits ne comptent pas'
    
  }

  constructor(public navCtrl: NavController) {

  }

}
