import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabModificarPage } from './tab-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: TabModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabModificarPageRoutingModule {}
