import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsserviceService {

  constructor(private http: HttpClient) { }

  getDetails(): any {
    return this.http.get('https://chit-perumalpatti-temple.herokuapp.com/details')
    .pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }
}
