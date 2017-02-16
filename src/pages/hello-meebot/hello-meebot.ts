import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-meebot',
  templateUrl: 'hello-meebot.html'
})
export class HelloMeebotPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello helloMeebot Page');
  }
}