import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// (10/5/21) Stopped Headers. Finish on Wednesday AND start like/dislike system!
import { AngularFireModule } from '@angular/fire';
import { enviroment } from 'src/environments/environment';
// import { WorldWarOneComponent } from './world-war-one/world-war-one.component';
// import { WorldWarTwoComponent} from './world-war-two/world-war-two.component';

@NgModule({
  declarations: [
    AppComponent
    // WorldWarOneComponent,
    // WorldWarTwoComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
