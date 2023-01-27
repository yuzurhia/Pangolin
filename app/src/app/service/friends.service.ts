import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iid } from '../interface/iid';
import { Ipangolin } from '../interface/ipangolin';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  pangolin(_id: string | undefined): Observable<Ipangolin> {
    return this.http.get<Ipangolin>(this.url + 'pangolin/' + _id);
  }

  getFriend(_id: string | undefined): Observable<any> {
    return this.http.get<any>(this.url + 'pangolinFriends/' + _id);
  }
}
