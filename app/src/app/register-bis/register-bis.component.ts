import { Component, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-register-bis',
  templateUrl: './register-bis.component.html',
  styleUrls: ['./register-bis.component.css'],
})
export class RegisterBisComponent {
  nom: string | undefined;
  password: string | undefined;
  role!: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';

  @Input()
  id: string | undefined;

  constructor(
    private authService: AuthService,
    private friend: FriendsService
  ) {}
  onSubmit() {
    // Inscription du pangolin
    this.authService
      .register({ nom: this.nom, password: this.password, role: this.role })
      .subscribe(
        (data) => {
          console.log(data);
          // recuperation de son ID
          this.friend.getPangolinId(this.nom).subscribe(
            (idFriend) => {
              // ajout du pangolin a la liste d'ami
              this.friend.addFriend(this.id, idFriend).subscribe(
                (data) => console.log(data),
                (error) => console.log(error)
              );
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (err) => console.log(err)
      );
  }
  // recuperer l'id du nouveau pangolin
  // ajouter dans la aliste d'ami
}
