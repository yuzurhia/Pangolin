import { Component, Input } from '@angular/core';
import { Irole } from '../interface/irole';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css'],
})
export class AmiComponent {
  nom: string | undefined;
  role!: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';

  @Input()
  id: string | undefined;

  constructor(private friend: FriendsService) {}

  ngOnInit(): void {
    console.log(this.id);

    this.friend.pangolin(this.id).subscribe((pangolin) => {
      console.log(pangolin);

      this.nom = pangolin.nom;
      console.log(typeof pangolin.role);

      this.role = pangolin.role;
    });
  }

  onSubmit() {}
}
