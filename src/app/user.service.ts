import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8080/';
  private _currentUser: String;

  constructor(private http: HttpClient) { }

  get currentUser(): String {
    return this._currentUser;
   }

  set currentUser(newName: String) {
    this._currentUser = newName;
  }

  validateUser(user) : Observable<string> {
    console.log('in user service funtion');
    console.log(user);
    if(user.email === 'user@gmail.com' && user.password === 'password') {
      return of('Success');
    } else if (user.email === 'user@gmail.com' && user.password !== 'password') {
      return of('Incorrect Password');
    } else {
      return of('Incorrect email');
    }
    // const params = new HttpParams()
    // .set('login.email', user.email)
    // .set('login.password', user.password);
    // return this.http.get<User>(this.baseURL + 'User-Login', {params} );
  }

}
