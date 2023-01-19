import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

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

  }
}
