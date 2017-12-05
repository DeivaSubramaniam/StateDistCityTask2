import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { DataService } from './shared/data.service';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DistrictComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
