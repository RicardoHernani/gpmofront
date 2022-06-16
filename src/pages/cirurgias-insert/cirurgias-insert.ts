import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cirurgias-insert',
  templateUrl: 'cirurgias-insert.html',
})
export class CirurgiasInsertPage {

formGroup: FormGroup;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        matricula: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
        data: ['', [Validators.required]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirurgiasInsertPage');
  }

}
