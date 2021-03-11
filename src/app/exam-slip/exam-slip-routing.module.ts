import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamSlipPage } from './exam-slip.page';

const routes: Routes = [
  {
    path: '',
    component: ExamSlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamSlipPageRoutingModule {}
