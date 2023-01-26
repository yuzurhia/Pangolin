import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';
import { AmisComponent } from './amis/amis.component';
import { AmiComponent } from './ami/ami.component';
@NgModule({
  declarations: [AppComponent, PangolinComponent, FormulaireComponent, RoleComponent, AmisComponent, AmiComponent],
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
