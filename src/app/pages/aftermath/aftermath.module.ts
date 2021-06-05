import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AftermathPageRoutingModule } from './aftermath-routing.module';

import { AftermathPage } from './aftermath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AftermathPageRoutingModule
  ],
  declarations: [AftermathPage]
})
export class AftermathPageModule {}
