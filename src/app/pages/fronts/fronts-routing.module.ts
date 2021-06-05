import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontsPage } from './fronts.page';

const routes: Routes = [
  {
    path: '',
    component: FrontsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontsPageRoutingModule {}
