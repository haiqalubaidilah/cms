import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubVerifyPageRoutingModule } from './sub-verify-routing.module';

import { SubVerifyPage } from './sub-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubVerifyPageRoutingModule
  ],
  declarations: [SubVerifyPage]
})
export class SubVerifyPageModule {}
