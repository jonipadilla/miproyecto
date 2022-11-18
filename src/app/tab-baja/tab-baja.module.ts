import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBajaPageRoutingModule } from './tab-baja-routing.module';

import { TabBajaPage } from './tab-baja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBajaPageRoutingModule
  ],
  declarations: [TabBajaPage]
})
export class TabBajaPageModule {}
