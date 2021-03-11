import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubRegisterPageRoutingModule } from './sub-register-routing.module';

import { SubRegisterPage } from './sub-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubRegisterPageRoutingModule
  ],
  declarations: [SubRegisterPage]
})
export class SubRegisterPageModule {}
