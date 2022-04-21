import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenciaDTO } from '../../models/referencia.dto';
import { ReferenciaService } from '../../services/domain/referencia.service';

@IonicPage()
@Component({
  selector: 'page-referencias',
  templateUrl: 'referencias.html',
})
export class ReferenciasPage {
  isTyped : boolean = false;
  refs : ReferenciaDTO = {
    codigo: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public referenciaService: ReferenciaService) {
  }

  showByCodigo() {
    this.referenciaService.findByCodigo(this.refs.codigo)
      .subscribe(resposta => {
        console.log(resposta);
        this.isTyped = true;
      },
      error => {
        console.log(error);
      });
  }
}
