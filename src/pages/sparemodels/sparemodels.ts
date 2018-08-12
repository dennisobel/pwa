import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

// Providers
import { SampledataProvider } from '../../providers/sampledata/sampledata';
import { HttpProvider } from '../../providers/http/http';

// Pages



@Component({
  selector: 'page-sparemodels',
  templateUrl: 'sparemodels.html',
})
export class SparemodelsPage {
  private model: any;
  private title: any;
  private spares: any;

  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController,  
    private alertCtrl: AlertController,  
    private dataProvider: SampledataProvider,
    private httpProvider: HttpProvider,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('data').title
    this.model = this.navParams.get('data').model.Model
    console.log(this.model)
  }

  dismiss(){
		this.viewCtrl.dismiss()
  }  



  itemSelected(model) {
    this.spares = this.dataProvider.productsJson().divisions[0].ModelSpare.Product

    let alert = this.alertCtrl.create();
    alert.setTitle('Which spare part would you like to buy?');

    this.spares.map(elem => {
      alert.addInput({
        type: 'checkbox',
        label: elem,
        value: elem,
        checked: false
      });
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Confirm Spare',
      handler: spare => {

        let userInfoAlert = this.alertCtrl.create({
          title:"User Info",
          inputs: [
            {
              name:'name',
              placeholder:'Name'
            },
            {
              name:'email',
              placeholder:'Email'
            },
            {
              name:'telephone',
              placeholder:'Telephone'
            }                        
          ],
          buttons:[
            {
              text:'Cancel',
              role:'cancel',
              handler: ()=>{

              }
            },
            {
              text:'Submit',
              handler: userData => {
                let data = {
                  product: this.title,
                  model: model,
                  spare: spare,
                  name: userData.name,
                  email: userData.email,
                  telephone: userData.telephone
                }

                console.log(data)

                this.httpProvider.buyspare(data).subscribe(data=>{
          
                })
                
                let bookAgainAlert = this.alertCtrl.create({
                  title:"Booking Complete",
                  buttons:[
                    {
                      text:"Book Again",
                      handler: ()=>{
                        this.navCtrl.pop()
                          // .then(()=>{
                          //   alert.dismiss()
                          // })
                      }
                    }
                  ],
                  cssClass: 'alertCustomCss'
                })
                bookAgainAlert.present()                
              }
            }
          ],
          cssClass: 'alertCustomCss'
        })

        userInfoAlert.present()
        
      }
    });
    alert.setCssClass('alertCustomCss')
    alert.present();
  }  

}
