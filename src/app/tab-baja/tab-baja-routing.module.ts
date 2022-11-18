import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBajaPage } from './tab-baja.page';

const routes: Routes = [
  {
    path: '',
    component: TabBajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBajaPageRoutingModule {}
