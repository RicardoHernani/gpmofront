import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { CirurgiaForm } from '../../models/cirurgia.form';
import { CirurgiaService } from '../../services/domain/cirurgia.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-cirurgias-insert',
  templateUrl: 'cirurgias-insert.html',
})
export class CirurgiasInsertPage {

cirurgia: CirurgiaForm;
formGroup: FormGroup;
codCirurgia: string;

  constructor(
     public navCtrl: NavController,
     public formBuilder: FormBuilder,
     public storage: StorageService,
     public usuarioService: UsuarioService,
     public cirurgiaService: CirurgiaService,
     public alertCtrl: AlertController) {

      this.formGroup = this.formBuilder.group({
        matricula: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9)]],
        data: ['', [Validators.required]]
      });
  }

  saveCirurgia() {
    this.cirurgiaService.insertCirurgia(this.cirurgia)
      .subscribe(response => {
        this.codCirurgia = this.extractId(response.headers.get('location'));
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
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ProcedimentosInsertPage', {codCirurgia: this.codCirurgia});
          }
        }
      ]
    });
    alert.present();
  }

  showInsertNotOk() {
    let alert = this.alertCtrl.create({
      title: 'Falhou!',
      message: 'Cirurgia NÃO cadastrada. Repetir cadastro!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    alert.present();
  }

  loadUsuario() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.cirurgia = {
            matricula: this.formGroup.value.matricula,
            data: this.formGroup.value.data,
            usuarioId: response.id
          };
          this.saveCirurgia();
        },
        error => {
          if (error.status == 403) {
            this.showInsertNotOk();
            this.navCtrl.setRoot('CirurgiasInsertPage');
          }
        });
    }
    else {
      this.showInsertNotOk();
      this.navCtrl.setRoot('CirurgiasInsertPage');
    }
  }

  private extractId(location : string) : string {
    let position = location.lastIndexOf('/');
    return location.substring(position +1, location.length)
  }

}
