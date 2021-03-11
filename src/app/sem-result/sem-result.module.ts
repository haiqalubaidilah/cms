import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemResultPageRoutingModule } from './sem-result-routing.module';

import { SemResultPage } from './sem-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemResultPageRoutingModule
  ],
  declarations: [SemResultPage]
})
export class SemResultPageModule {}
