import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamSlipPageRoutingModule } from './exam-slip-routing.module';

import { ExamSlipPage } from './exam-slip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamSlipPageRoutingModule
  ],
  declarations: [ExamSlipPage]
})
export class ExamSlipPageModule {}
