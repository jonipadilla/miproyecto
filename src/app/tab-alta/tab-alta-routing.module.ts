import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAltaPage } from './tab-alta.page';

const routes: Routes = [
  {
    path: '',
    component: TabAltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAltaPageRoutingModule {}
