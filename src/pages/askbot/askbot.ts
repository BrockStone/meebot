import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-askbot',
  templateUrl: 'askbot.html'
})
export class AskbotPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello askbot Page');
  }
}
