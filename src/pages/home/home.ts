import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

// Pages
import { MyaccountPage } from '../myaccount/myaccount';
import { BuysparePage } from '../buyspare/buyspare';
import { BookservicePage } from '../bookservice/bookservice';
import { MessagesPage } from '../messages/messages';
import { LeasingPage } from '../leasing/leasing';
import { CustomercarePage } from '../customercare/customercare';

// Providers
import { HelperfunctionsProvider } from '../../providers/helperfunctions/helperfunctions';
import { SampledataProvider } from '../../providers/sampledata/sampledata';
import { SocialSharing } from '@ionic-native/social-sharing';




 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private data: any;
 
  constructor(
    private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController, 
    private helpers: HelperfunctionsProvider,
    private dataProvider: SampledataProvider,
    private socialSharing: SocialSharing) {
 
  }

  ionViewDidLoad(){
    let products = this.dataProvider.productsJson()
    console.log(products)
  }


 
  handleMyProfile() {    
    this.helpers.createModal(MyaccountPage,null)
  }

  handleBuySpare(){
    this.helpers.createModal(BuysparePage,null)
  }

  handleBookService(){
    this.helpers.createModal(BookservicePage,null)
  }

  handleMessages(){
    this.helpers.createModal(MessagesPage,null)
  }

  handleLeasing(){
    this.helpers.createModal(LeasingPage,null)
  }

  handleCustomerCare(){
    this.helpers.createModal(CustomercarePage,null)
    /*
    let custCareAlert = this.alertCtrl.create({
      title:"Customer Care",
      subTitle:"What would you like help with?",
      inputs:[
        {
          name:'query',
          placeholder:'Question'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Submit',
          handler: data=>{
            let number = '+254727677068'
            this.socialSharing.shareViaWhatsAppToReceiver(number,data.query)
            console.log(data.query)
          }
        }
      ],
      cssClass:'alertCustomCss'
    })
    custCareAlert.present()
    */
 }

 
}