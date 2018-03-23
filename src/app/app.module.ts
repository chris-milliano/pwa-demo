import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { List1Component } from './pages/list-1/list-1.component';
import { List2Component } from './pages/list-2/list-2.component';
import { List3Component } from './pages/list-3/list-3.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    List3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
