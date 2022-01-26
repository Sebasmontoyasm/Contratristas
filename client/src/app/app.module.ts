import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContratistaFormComponent } from './components/contratista-form/contratista-form.component';
import { ContratistaListComponent } from './components/contratista-list/contratista-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContratistaFormComponent,
    ContratistaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
