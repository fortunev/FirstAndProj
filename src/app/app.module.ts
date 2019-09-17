import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent} from './LifecycleHooks/child/child.component';
import { LifecycleComponent } from './LifecycleHooks/LH.component';
import { AppRoutingModule } from './app.routes.module';
import { DataService } from './httpclient/data.service';
import { HttpClientComponent } from './httpclient/httpclient.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
