import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CirurgiaService } from '../../services/domain/cirurgia.service';

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
     public formBuilder: FormBuilder,
     public cirurgiaService: CirurgiaService,
     public alertCtrl: AlertController) {

      this.formGroup = this.formBuilder.group({
        matricula: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9)]],
        data: ['', [Validators.required]],
        usuarioId: [1]
      });
  }

  saveCirurgia() {
    this.cirurgiaService.insertCirurgia(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cirurgia cadastrada com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirurgiasInsertPage');
  }

}
