import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationSubjectPage } from './evaluation-subject.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationSubjectPageRoutingModule {}
