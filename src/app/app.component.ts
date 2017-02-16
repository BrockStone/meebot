// Global component imports
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// Meebot class imports
import { HelloMeebotPage } from '../pages/helloMeebot/helloMeebot';
import { AskbotPage } from '../pages/askbot/askbot';
import { AnswerbotPage } from '../pages/answerbot/answerbot';
import { MeebotPage } from '../pages/meebot/meebot';
import { FriendsPage } from '../pages/friends/friends';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloMeebotPage the root (or first) page
  rootPage: any = HelloMeebotPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    // set meebot pages
    this.pages = [
      { title: 'Hello MeeBot', component: HelloMeebotPage },
      { title: 'Wheres that AI?', component: AskbotPage },
      { title: 'We need a brain first...', component: AnswerbotPage },
      { title: 'Wheres all my friends?', component: FriendsPage },
      { title: 'My First Meebot', component: MeebotPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
