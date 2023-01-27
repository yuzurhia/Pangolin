import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iid } from '../interface/iid';
import { Ipangolin } from '../interface/ipangolin';
// import { Irole } from '../interface/irole';
import { FriendsService } from '../service/friends.service';
// import { ngOnInit } from '@angular/core';

@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css'],
})
export class PangolinComponent {
  // pangolin!: Ipangolin;

  nom: string | undefined;
  password: string | undefined;
  role!: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';
  amis: Array<string> | undefined;

  id: string | undefined;

  constructor(
    private activitated: ActivatedRoute,
    private friend: FriendsService
  ) {}

  ngOnInit(): void {
    this.activitated.params.subscribe((data) => {
      this.id = data['id'];
      // this.pangolin._id = data['id'];

      this.friend.pangolin(this.id).subscribe((object) => {
        console.log('pangolin composant' + object);

        this.nom = object.nom;
        this.password = object.password;
        this.role = object.role;
        this.amis = object.amis;

        // ---------------------------
        // this.pangolin.nom = object.nom;
        // this.pangolin.password = object.password;
        // this.pangolin.role = object.role;
        // this.pangolin.amis = object.amis;
      });
    });
  }
}
