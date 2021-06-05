import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticpantsPageRoutingModule } from './particpants-routing.module';

import { ParticpantsPage } from './particpants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticpantsPageRoutingModule
  ],
  declarations: [ParticpantsPage]
})
export class ParticpantsPageModule {}
