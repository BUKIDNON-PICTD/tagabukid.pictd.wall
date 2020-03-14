import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacttracingPage } from './contacttracing.page';

const routes: Routes = [
  {
    path: '',
    component: ContacttracingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacttracingPageRoutingModule {}
