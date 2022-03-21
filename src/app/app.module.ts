import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [], //DataService am not really sure why this is added here though..
  bootstrap: [AppComponent]
})
export class AppModule { }
