import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, PangolinComponent, FormulaireComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
