import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http'
 

@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {
  private bookserviceformgroup: FormGroup
  private page: any;

  constructor(
		private navCtrl: NavController,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
		private navParams: NavParams,
    private formBuilder: FormBuilder,
    private httpProvider: HttpProvider  
  ) {
    this.bookserviceformgroup = this.formBuilder.group({
      fromdate:["",Validators.required],
      todate:["",Validators.required]
    })    
  }  

  ionViewDidLoad(){
    this.page = this.navParams.get('data').title    
  }
 

  dismiss(){
		this.viewCtrl.dismiss()
  }  
  
  onSubmit(){
    let userInfoAlert = this.alertCtrl.create({
      title:'User Info',
      inputs:[
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
          handler: userData=>{
            let data = {
              product:this.navParams.get('data').title,
              from: this.bookserviceformgroup.value.fromdate,
              to: this.bookserviceformgroup.value.todate,
              name: userData.name,
              email: userData.email,
              telephone: userData.telephone
            }

            if(this.page === 'bookservice'){
              this.httpProvider.bookservice(data).subscribe(data=>{
                console.log(data)
              }) 
            }else if(this.page === 'lease'){
              this.httpProvider.rental(data).subscribe(data=>{
                console.log(data)
              })               
            }

  
            
            let bookAgainAlert = this.alertCtrl.create({
              title:"Booking Complete",
              buttons:[
                {
                  text:"Book Again",
                  handler: ()=>{
                    this.navCtrl.pop()
                  }
                }
              ],
              cssClass: 'alertCustomCss'
            })
            bookAgainAlert.present()             
          }
        },        
      ],
      cssClass: 'alertCustomCss'
    })

    userInfoAlert.present()
  }

}
