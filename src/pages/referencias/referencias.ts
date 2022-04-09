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

  refs : ReferenciaDTO = {
    codigo: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public referenciaService: ReferenciaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferenciasPage');
  }

  searchReferenciaCodigo() {
    this.referenciaService.findReferenciaCodigo()
       {
        console.log(this.refs);
       }

  }

}
