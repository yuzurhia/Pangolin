import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    PangolinComponent,
    FormulaireComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }