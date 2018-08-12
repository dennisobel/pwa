// Modules
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

// Providers
import { SampledataProvider } from '../../providers/sampledata/sampledata';
import { HelperfunctionsProvider } from '../../providers/helperfunctions/helperfunctions'

// Pages
import { SparemodelsPage } from '../sparemodels/sparemodels';




@Component({
  selector: 'page-buyspare',
  templateUrl: 'buyspare.html',
})
export class BuysparePage {
  // private spareTypes: Array<{title: any, model: any}>[]=[]
  private spareTypes: any[]=[]
  private spareSubTypes: any;
  private products: any;
  private data: Array<{title: any, model: any}>[]=[]

  constructor(
    private navCtrl: NavController, 
    private viewCtrl: ViewController, 
    private dataProvider: SampledataProvider,
    private helperFuncts: HelperfunctionsProvider,
    private navParams: NavParams) {
  }

  ionViewDidLoad(){
    // this.spareTypes = this.dataProvider.spareTypes()
    this.spareSubTypes = this.dataProvider.spareSubTypes()

    this.products = this.dataProvider.productsJson()

    // let spareTypes = this.dataProvider.productsJson().divisions[0].Construction.Brand[0].case.Product

    let products = this.products.divisions[0].Construction.Brand[0].Case.Product[0]

    

    // console.log(products)

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
  
  handleData(data){
    this.helperFuncts.createModal(SparemodelsPage,{data})
  }

}
