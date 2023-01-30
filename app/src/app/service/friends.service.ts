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
  updateRole(_id: string | undefined, role: string): Observable<any> {
    return this.http.post<any>(this.url + 'updateRole', { _id, role });
  }

  removeFriend(
    _id: string | undefined,
    idFriend: string | undefined
  ): Observable<any> {
    return this.http.post<any>(this.url + 'deletePangolin', { _id, idFriend });
  }

  addFriend(_id?: string, idFriend?: string): Observable<any> {
    return this.http.post<any>(this.url + 'addPangolin', { _id, idFriend });
  }

  getAllPangolin(): Observable<any> {
    return this.http.get<any>(this.url + 'getAllPangolin');
  }
}
