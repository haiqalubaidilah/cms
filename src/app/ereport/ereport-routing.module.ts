import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EreportPage } from './ereport.page';

const routes: Routes = [
  {
    path: '',
    component: EreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EreportPageRoutingModule {}
