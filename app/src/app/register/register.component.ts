import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nom: string | undefined;
  password: string | undefined;
  role!: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';

  constructor(private authService: AuthService) {}
  onSubmit() {
    this.authService
      .register({ nom: this.nom, password: this.password, role: this.role })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => console.log(err)
      );
  }
}
