import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  saveToken(token: string, nom: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['pangolin/' + nom]);
  }

  isLogged() {
    const token = localStorage.getItem('token');
    console.log(token);
    return !!token;
  }
}
