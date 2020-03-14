import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuilistPageRoutingModule } from './puilist-routing.module';

import { PuilistPage } from './puilist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuilistPageRoutingModule
  ],
  declarations: [PuilistPage]
})
export class PuilistPageModule {}
