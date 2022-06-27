import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { CirurgiaService } from '../../services/domain/cirurgia.service';
import { ProcedimentoForm } from '../../models/procedimentoForm';
import { ProcedimentoService } from '../../services/domain/procedimento.service';
import { ReferenciaService } from '../../services/domain/referencia.service';

@IonicPage()
@Component({
  selector: 'page-procedimentos-insert',
  templateUrl: 'procedimentos-insert.html',
})
export class ProcedimentosInsertPage {

  formGroup: FormGroup;
  procedimento: ProcedimentoForm;
  codCirurgia: string;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public formBuilder: FormBuilder,
      public storage: StorageService,
      public cirurgiaService: CirurgiaService,
      public procedimentoService: ProcedimentoService,
      public referenciaService: ReferenciaService,
      public alertCtrl: AlertController) {
        
        this.codCirurgia = this.navParams.get('codCirurgia');

        this.formGroup = this.formBuilder.group({
          tipo: ['', [Validators.required]],
          premio: ['', [Validators.required]],
          referenciaCodigo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
        });
    }

    onSubmit(buttonType): void {
      if(buttonType==="inserirMaisProcedimento") {
          this.inserirMaisProcedimento();
      }
      if(buttonType==="inserirFinalizarProcedimento"){
          this.inserirFinalizarProcedimento();
      }
    }

    inserirFinalizarProcedimento() {
      let localUser = this.storage.getLocalUser();
      if (this.codCirurgia && localUser && localUser.email) {
        this.procedimento = {
          tipo: this.formGroup.value.tipo,
          premio: this.formGroup.value.premio,
          cirurgiaId: this.codCirurgia,
          referenciaCodigo: this.formGroup.value.referenciaCodigo
        };
      }
      else {
          this.showInsertNotOk();
      }
      
      if (this.procedimento.referenciaCodigo != null) {
        this.referenciaService.findByCodigo(this.procedimento.referenciaCodigo)
        .subscribe(response => {
          this.saveProcedimento();
        },
        error => {
          if (error.status == 404) {
          }
        });
      }
      else {
        this.navCtrl.setRoot('ProcedimentosInsertPage');
      }
    }

    inserirMaisProcedimento() {
      console.log('imp');
    }

    saveProcedimento() {
      this.procedimentoService.insertProcedimento(this.procedimento)
        .subscribe(response => {
          this.showInsertOk();
        },
        error => {
          this.showInsertNotOk();
        });
    }
      
    showInsertOk() {
      let alert = this.alertCtrl.create({
        title: 'Sucesso!',
        message: 'Procedimento cadastrado com sucesso!',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.setRoot('CirurgiasInsertPage');
            }
          }
        ]
      });
      alert.present();
    }

    showInsertNotOk() {
      let alert = this.alertCtrl.create({
        title: 'Falhou!',
        message: 'Procedimento NÃO cadastrado. Repetir cadastro!',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.setRoot('ProcedimentosInsertPage');
            }

          }
        ]
      });
      alert.present();
    }

}
