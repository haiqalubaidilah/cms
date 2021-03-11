import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIssuePageRoutingModule } from './login-issue-routing.module';

import { LoginIssuePage } from './login-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIssuePageRoutingModule
  ],
  declarations: [LoginIssuePage]
})
export class LoginIssuePageModule {}
