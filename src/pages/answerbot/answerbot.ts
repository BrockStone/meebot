import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-answerbot',
  templateUrl: 'answerbot.html'
})
export class AnswerbotPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello answerbot Page');
  }
}
