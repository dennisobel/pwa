import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

// Pages
import { CalenderPage } from '../calender/calender';

// Providers
import { SampledataProvider } from '../../providers/sampledata/sampledata';
import { HelperfunctionsProvider } from '../../providers/helperfunctions/helperfunctions'


@Component({
  selector: 'page-bookservice',
  templateUrl: 'bookservice.html',
})
export class BookservicePage {
  // private spareTypes: Array<{title: String, model: any}>[]=[]
  private spareTypes: any[]=[]
  private products: any;

  constructor(
    private viewCtrl: ViewController, 
    private dataProvider: SampledataProvider,
    private helperFuncts: HelperfunctionsProvider) {
  }

  ionViewDidLoad() {
    this.products = this.dataProvider.productsJson()
    let products = this.products.divisions[0].Construction.Brand[0].Case.Product[0]

    for(let key in products){
      if(products.hasOwnProperty(key)){
        
        // this.spareTypes.push(key)

        this.spareTypes.push({title:key, model:products[key]})
      }
    }    
  }

  dismiss(){
		this.viewCtrl.dismiss()
  }    

  handleCalender(data){
    this.helperFuncts.createModal(CalenderPage,{data})
  }

}
