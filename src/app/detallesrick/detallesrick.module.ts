import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesrickPageRoutingModule } from './detallesrick-routing.module';

import { DetallesrickPage } from './detallesrick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesrickPageRoutingModule
  ],
  declarations: [DetallesrickPage]
})
export class DetallesrickPageModule {}
