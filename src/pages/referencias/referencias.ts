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
    codigo: "",
    descricao: ""
  };
  guardaResposta: ReferenciaDTO;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public referenciaService: ReferenciaService) {
  }

  showBy() {
    if (this.refs.codigo !== "" && this.refs.descricao ==="")  {
      this.showByCodigo();
    } else if (this.refs.codigo ==="" && this.refs.descricao !== "") {
      this.showByDescricao();
    } else if (this.refs.codigo !== "" && this.refs.descricao !== "") {
    console.log("Erro. Só pode haver um!");
    }
  }

  showByCodigo() {
    this.referenciaService.findByCodigo(this.refs.codigo)
      .subscribe(resposta => {
        this.guardaResposta = resposta;
        this.isTyped = true;
      },
      error => {
        console.log(error);
      });
  }

  showByDescricao() {
    this.referenciaService.findByDescricao(this.refs.descricao)
      .subscribe(resposta => {
        console.log(resposta)
      },
      error => {
        console.log(error);
      });
  }

}
