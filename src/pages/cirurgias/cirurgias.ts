import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cirurgias',
  templateUrl: 'cirurgias.html'
})
export class CirurgiasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  insertCirurgias() {
    this.navCtrl.push('CirurgiasInsertPage');
  }

/*
itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  */



}