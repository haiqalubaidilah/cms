import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubRegisterPage } from './sub-register.page';

const routes: Routes = [
  {
    path: '',
    component: SubRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRegisterPageRoutingModule {}
