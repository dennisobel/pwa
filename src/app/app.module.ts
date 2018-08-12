import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SocialSharing } from '@ionic-native/social-sharing';
 



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { BuysparePage } from '../pages/buyspare/buyspare';
import { SparemodelsPage } from '../pages/sparemodels/sparemodels';
import { BookservicePage } from '../pages/bookservice/bookservice';
import { CalenderPage } from '../pages/calender/calender';
import { MessagesPage } from '../pages/messages/messages';
import { LeasingPage } from '../pages/leasing/leasing';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { CustomercarePage } from '../pages/customercare/customercare';

import { SampledataProvider } from '../providers/sampledata/sampledata';
import { HelperfunctionsProvider } from '../providers/helperfunctions/helperfunctions';
import { HttpProvider } from '../providers/http/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyaccountPage,
    BuysparePage,
    SparemodelsPage,
    BookservicePage,
    CalenderPage,
    MessagesPage,
    LeasingPage,
    UserinfoPage,
    CustomercarePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyaccountPage,
    BuysparePage,
    SparemodelsPage,
    BookservicePage,
    CalenderPage,
    MessagesPage,
    LeasingPage,
    UserinfoPage,
    CustomercarePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },  
    SampledataProvider,
    HelperfunctionsProvider,
    HttpProvider,
    SocialSharing
  ]
})
export class AppModule {}
