import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabModificarPageRoutingModule } from './tab-modificar-routing.module';

import { TabModificarPage } from './tab-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabModificarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TabModificarPage]
})
export class TabModificarPageModule {}
