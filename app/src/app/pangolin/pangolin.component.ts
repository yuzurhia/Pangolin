import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iid } from '../interface/iid';
import { Ipangolin } from '../interface/ipangolin';
// import { Irole } from '../interface/irole';
import { FriendsService } from '../service/friends.service';

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

  roleList: string[] = [
    'Guerrier',
    'Alchimiste',
    'Sorcier',
    'Espions',
    'Enchanteur',
  ]; // liste des roles que le pangolin n'incarne pas
  selectedRole!:
    | 'Guerrier'
    | 'Alchimiste'
    | 'Sorcier'
    | 'Espions'
    | 'Enchanteur';

  constructor(
    private activitated: ActivatedRoute,
    private friend: FriendsService
  ) {}

  ngOnInit(): void {
    this.activitated.params.subscribe((data) => {
      this.id = data['id'];
      // this.pangolin._id = data['id'];

      this.friend.pangolin(this.id).subscribe((object) => {
        this.nom = object.nom;
        this.password = object.password;
        this.role = object.role;
        this.amis = object.amis;
        this.roleList = this.roleList.filter((item) => item != this.role);
      });
    });
  }

  onSubmit() {
    this.role = this.selectedRole;
    this.friend.updateRole(this.id, this.selectedRole).subscribe(
      (data) => {
        console.log('data:' + data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
