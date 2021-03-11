import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EreportPageRoutingModule } from './ereport-routing.module';

import { EreportPage } from './ereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EreportPageRoutingModule
  ],
  declarations: [EreportPage]
})
export class EreportPageModule {}
