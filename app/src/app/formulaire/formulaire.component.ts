import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  nom: string = '';
  password: string = '';
  OnInit() {}

  constructor(
    private authService: AuthService,
    private TokenService: TokenService
  ) {}

  onSubmit() {
    this.authService
      .login({ nom: this.nom, password: this.password })
      .subscribe(
        (data) => {
          this.TokenService.saveToken(data.token, data._id);
        },
        (err) => console.log(err)
      );
  }
}
