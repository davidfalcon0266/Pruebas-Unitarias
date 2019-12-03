import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = "http://localhost:3000/libros"

  constructor(private http: HttpClient) { }

  getBookFromInternet(isbn: number): Observable<any> {
    return this.http.get(this.url + '?isbn=' + isbn);
  }
}
