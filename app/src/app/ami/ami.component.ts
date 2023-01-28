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
    this.friend.pangolin(this.id).subscribe((pangolin) => {
      this.nom = pangolin.nom;

      this.role = pangolin.role;
    });
  }

  onSubmit() {}
}
