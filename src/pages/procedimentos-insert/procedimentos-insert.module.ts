import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcedimentosInsertPage } from './procedimentos-insert';

@NgModule({
  declarations: [
    ProcedimentosInsertPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcedimentosInsertPage),
  ],
})
export class ProcedimentosInsertPageModule {}
