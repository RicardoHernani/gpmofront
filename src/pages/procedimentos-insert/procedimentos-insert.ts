import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { CirurgiaService } from '../../services/domain/cirurgia.service';
import { ProcedimentoForm } from '../../models/procedimentoForm';
import { ProcedimentoService } from '../../services/domain/procedimento.service';

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
      public alertCtrl: AlertController) {
        
        this.codCirurgia = this.navParams.get('codCirurgia')

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

    inserirFinalizarProcedimento(){
      console.log('ifp');
      console.log(this.codCirurgia);
    }

    inserirMaisProcedimento(){
      console.log('imp');
    }

    

/*


    saveProcedimento() {
      this.procedimentoService.insertProcedimento(this.procedimento)
        .subscribe(response => {
          this.showInsertOk();
        },
        error => {});
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
              this.navCtrl.setRoot('ProcedimentosInsertPage');
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
            text: 'Ok'
          }
        ]
      });
      alert.present();
    }

    loadCirurgia() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
          this.usuarioService.findByEmail(localUser.email)
            .subscribe(response => {
              this.procedimento = {
                tipo: this.formGroup.value.tipo,
                premio: this.formGroup.value.premio,
                cirurgiaId: response.id,
                referenciaCodigo: this.formGroup.value.referenciaCodigo
              };
              this.saveProcedimento();
            
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


*/

    
    
    

}
