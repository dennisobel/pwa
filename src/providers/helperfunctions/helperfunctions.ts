import { ModalController } from 'ionic-angular';

import { Injectable } from '@angular/core';


@Injectable()
export class HelperfunctionsProvider {

  constructor(
    private modalCtrl: ModalController) {}

  createModal(page,data){
    let modal = this.modalCtrl.create(page,data);
    return modal.present()
  }  

}
