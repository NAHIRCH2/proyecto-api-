import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesrickPage } from './detallesrick.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesrickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesrickPageRoutingModule {}
