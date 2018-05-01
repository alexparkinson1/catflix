import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {

  private userUrl = "https://sodapack.getsoda.com/api/v1.0/user";

  constructor(
    private http: HttpClient) { }

  getUser (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
}
