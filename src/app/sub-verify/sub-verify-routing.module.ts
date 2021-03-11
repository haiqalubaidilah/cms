import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubVerifyPage } from './sub-verify.page';

const routes: Routes = [
  {
    path: '',
    component: SubVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubVerifyPageRoutingModule {}
