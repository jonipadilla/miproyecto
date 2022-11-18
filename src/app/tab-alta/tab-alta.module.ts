import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabAltaPageRoutingModule } from './tab-alta-routing.module';

import { TabAltaPage } from './tab-alta.page';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    TabAltaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TabAltaPage]
})
export class TabAltaPageModule {}
