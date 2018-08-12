import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-customercare',
  templateUrl: 'customercare.html',
})
export class CustomercarePage {
  private custFormGroup: FormGroup

  @ViewChild('myInput') myInput: ElementRef;

  constructor(
    private viewCtrl: ViewController, 
    private formBuilder: FormBuilder,
    private social: SocialSharing) {

      this.custFormGroup = this.formBuilder.group({
        name:["",Validators.required],
        email:["",Validators.required],
        telephone:["",Validators.required],
        enquiry:["",Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomercarePage');
  }

  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  } 
  
  handleCustSubmit(){
    let phoneNumber = "254729234359"
    let name = this.custFormGroup.value.name
    let email = this.custFormGroup.value.email
    let telephone = this.custFormGroup.value.telephone
    let enquiry = this.custFormGroup.value.enquiry
    let message = `
      name:       ${name},\n
      email:      ${email},\n
      telephone:  ${telephone},\n\n
      enquiry:    ${enquiry}
    `
    console.log(message)
    this.social.shareViaWhatsAppToReceiver(phoneNumber,message)
  }

  dismiss(){
		this.viewCtrl.dismiss()
	}  

}
