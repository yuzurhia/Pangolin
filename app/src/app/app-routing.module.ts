import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  {
    path: 'pangolin/:id',
    component: PangolinComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'formulaire',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
