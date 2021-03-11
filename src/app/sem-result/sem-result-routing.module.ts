import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemResultPage } from './sem-result.page';

const routes: Routes = [
  {
    path: '',
    component: SemResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemResultPageRoutingModule {}
