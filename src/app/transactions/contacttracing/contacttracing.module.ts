import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacttracingPageRoutingModule } from './contacttracing-routing.module';

import { ContacttracingPage } from './contacttracing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacttracingPageRoutingModule
  ],
  declarations: [ContacttracingPage]
})
export class ContacttracingPageModule {}
