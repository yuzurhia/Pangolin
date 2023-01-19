import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  nom:String="";
  password: String="";

  OnInit(){

  }
  
  onSubmit(){
  // action de verification?
  // action de erediction des routes
  }
}
