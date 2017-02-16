import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meebot',
  templateUrl: 'meebot.html'
})
export class MeebotPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello meebot Page');
  }
}
