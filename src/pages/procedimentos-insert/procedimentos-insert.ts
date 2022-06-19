import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { CirurgiaService } from '../../services/domain/cirurgia.service';

@IonicPage()
@Component({
  selector: 'page-procedimentos-insert',
  templateUrl: 'procedimentos-insert.html',
})
export class ProcedimentosInsertPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public storage: StorageService,
    public cirurgiaService: CirurgiaService,
    public alertCtrl: AlertController) {

      this.formGroup = this.formBuilder.group({
        tipo: ['', [Validators.required]],
        premio: ['', [Validators.required]],
        codigo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]

      });
  }

  loadCirurgia(){

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcedimentosInsertPage');
  }

}
