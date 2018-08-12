import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

// Providers
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  private profileFormGroup: FormGroup

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController, 
    private formBuilder: FormBuilder,
    private httpProvider: HttpProvider){

      this.profileFormGroup = this.formBuilder.group({
        name:["",Validators.required],
        email:["",Validators.required],
        telephone:["",Validators.required],
      })      
  }

  ionViewDidLoad() {
    
  }

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
