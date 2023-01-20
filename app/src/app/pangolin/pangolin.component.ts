import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css'],
})
export class PangolinComponent {
  nom: String = '';
  password: String = '';
  role: String = '';

  OnInit() {
    // initialiser les proprietes du composant
  }
}
