import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-alta',
    loadChildren: () => import('./tab-alta/tab-alta.module').then( m => m.TabAltaPageModule)
  },
  {
    path: 'tab-modificar',
    loadChildren: () => import('./tab-modificar/tab-modificar.module').then( m => m.TabModificarPageModule)
  },
  {
    path: 'tab-baja',
    loadChildren: () => import('./tab-baja/tab-baja.module').then( m => m.TabBajaPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
