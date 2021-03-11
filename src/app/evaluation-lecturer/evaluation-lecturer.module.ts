import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationLecturerPageRoutingModule } from './evaluation-lecturer-routing.module';

import { EvaluationLecturerPage } from './evaluation-lecturer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationLecturerPageRoutingModule
  ],
  declarations: [EvaluationLecturerPage]
})
export class EvaluationLecturerPageModule {}
