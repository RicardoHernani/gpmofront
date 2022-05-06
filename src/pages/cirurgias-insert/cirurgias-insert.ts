import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cirurgias-insert',
  templateUrl: 'cirurgias-insert.html',
})
export class CirurgiasInsertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirurgiasInsertPage');
  }

}
