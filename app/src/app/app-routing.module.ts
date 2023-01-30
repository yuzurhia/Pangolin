import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent }, //connexion
  { path: 'register', component: RegisterComponent }, //inscription
  {
    //page Utilisateur
    path: 'pangolin/:id',
    component: PangolinComponent,
    canActivate: [AuthGuard],
  },

  {
    //default
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
