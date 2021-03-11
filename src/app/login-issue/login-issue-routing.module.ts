import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginIssuePage } from './login-issue.page';

const routes: Routes = [
  {
    path: '',
    component: LoginIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginIssuePageRoutingModule {}
