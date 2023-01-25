import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  nom: String = '';
  password: String = '';

  OnInit() {}

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService
      .login({ nom: this.nom, password: this.password })
      .subscribe(
        (data: any) => console.log(data),
        (err: any) => console.log(err)
      );
    // action de verification?
    // action de erediction des routes
  }
}
