import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icredentials } from '../interface/icredentials';
import { Itoken } from '../interface/itoken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(credentials: Icredentials): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credentials);
  }

  // getId()
}
