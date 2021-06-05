import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontsPageRoutingModule } from './fronts-routing.module';

import { FrontsPage } from './fronts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontsPageRoutingModule
  ],
  declarations: [FrontsPage]
})
export class FrontsPageModule {}
