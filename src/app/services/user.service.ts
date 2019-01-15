import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http
    .get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      catchError( err => {
        return throwError(err);
      })
    );
  }
}
