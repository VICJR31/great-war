import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fronts',
    loadChildren: () => import('./pages/fronts/fronts.module').then( m => m.FrontsPageModule)
  },
  {
    path: 'aftermath',
    loadChildren: () => import('./pages/aftermath/aftermath.module').then( m => m.AftermathPageModule)
  },
  {
    path: 'participants',
    loadChildren: () => import('./pages/participants/participants.module').then( m => m.ParticipantsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
