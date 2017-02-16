import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Meebot class imports
import { HelloMeebotPage } from '../pages/hello-meebot/hello-meebot';
import { AskbotPage } from '../pages/askbot/askbot';
import { AnswerbotPage } from '../pages/answerbot/answerbot';
import { MeebotPage } from '../pages/meebot/meebot';
import { FriendsPage } from '../pages/friends/friends';

@NgModule({
  declarations: [
    MyApp,
    HelloMeebotPage,
    AskbotPage,
    AnswerbotPage,
    MeebotPage,
    FriendsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloMeebotPage,
    AskbotPage,
    AnswerbotPage,
    MeebotPage,
    FriendsPage
  ],
  providers: []
})
export class AppModule {}
