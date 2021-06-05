import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AftermathPage } from './aftermath.page';

const routes: Routes = [
  {
    path: '',
    component: AftermathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AftermathPageRoutingModule {}
