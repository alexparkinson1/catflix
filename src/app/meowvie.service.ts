import { Injectable } from '@angular/core';
import { Meowvie } from './meowvie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeowvieService {
  private meowviesUrl = 'https://sodapack.getsoda.com/api/v1.0/movie';

  constructor(
    private http: HttpClient) { }

  getMeowvies (): Observable<Meowvie[]> {
    return this.http.get<Meowvie[]>(this.meowviesUrl);
  }

}
