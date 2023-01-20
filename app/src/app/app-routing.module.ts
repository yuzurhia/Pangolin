import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PangolinComponent } from './pangolin/pangolin.component';

const routes:Routes= [
  {path: '/formulaire', component:FormulaireComponent},
  {path: '/pangolin/:id' , component:PangolinComponent},
  {path: '', redirectTo:'formulaire', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


