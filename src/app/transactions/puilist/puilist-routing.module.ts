import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuilistPage } from './puilist.page';

const routes: Routes = [
  {
    path: '',
    component: PuilistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuilistPageRoutingModule {}
