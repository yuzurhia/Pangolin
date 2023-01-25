import { Component } from '@angular/core';
// import { ngOnInit } from '@angular/core';

@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css'],
})
export class PangolinComponent {
  nom: string;
  password: string;
  role: string;

  constructor() {
    this.nom = 'azeaea';
    this.password = 'rqerzre';
    this.role = 'rqerzre';
  }
}
