import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticpantsPage } from './particpants.page';

const routes: Routes = [
  {
    path: '',
    component: ParticpantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticpantsPageRoutingModule {}
