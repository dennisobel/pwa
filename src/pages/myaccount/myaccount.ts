import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

// Providers
import { HttpProvider } from '../../providers/http/http'


@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  private profileFormGroup: FormGroup

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController, 
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private httpProvider: HttpProvider) {

      this.profileFormGroup = this.formBuilder.group({
        name:["",Validators.required],
        email:["",Validators.required],
        telephone:["",Validators.required],
      })
  }

  ionViewDidLoad(){}

  //handle events
  handleProfileSubmit(){
    let data = this.profileFormGroup.value
    console.log(data)
    this.httpProvider.postProfile(data).subscribe(data=>{
      
    })
  }
  
	dismiss(){
		this.viewCtrl.dismiss()
	}  

}
