import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationSubjectPageRoutingModule } from './evaluation-subject-routing.module';

import { EvaluationSubjectPage } from './evaluation-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationSubjectPageRoutingModule
  ],
  declarations: [EvaluationSubjectPage]
})
export class EvaluationSubjectPageModule {}
