import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iid } from '../interface/iid';
import { FriendsService } from '../service/friends.service';
// import { ngOnInit } from '@angular/core';

@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css'],
})
export class PangolinComponent {
  nom: string | undefined;
  password: string | undefined;
  role: string | undefined;
  amis: Array<string> | undefined;

  id: string | undefined;

  constructor(
    private activitated: ActivatedRoute,
    private friend: FriendsService
  ) {}

  ngOnInit(): void {
    this.activitated.params.subscribe((data) => {
      this.id = data['id'];

      this.friend.pangolin(this.id).subscribe((pangolin) => {
        console.log(pangolin);

        this.nom = pangolin.nom;
        this.password = pangolin.password;
        this.role = pangolin.role;
        this.amis = pangolin.amis;
      });
    });
  }
}
