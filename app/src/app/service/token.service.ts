import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectId } from 'mongoose';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  saveToken(token: string, id: ObjectId): void {
    localStorage.setItem('token', token);
    this.router.navigate(['pangolin/' + id]);
  }

  isLogged() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
