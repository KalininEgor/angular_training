import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    constructor(private http: HttpClient) {}

    get<T>(url: string, options?: {}): Observable<T> {
        return this.http.get<T>(url, options).pipe(
            catchError(this.handleError)
        );
    }

    post<T>(url: string, body: T, options?: {}): Observable<boolean> {
        return this.http.post<T>(url, body, options).pipe(
            map(response => true),
            catchError(this.handleError)
        );
    }

    put<T>(url: string, body: T, options?: {}): Observable<boolean> {
        return this.http.put<T>(url, body, options).pipe(
            map(response => true),
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was`, error.error);
        }
        alert('Something bad happened! Please reload page or try again later.')
        return throwError(() => new Error('Something bad happened; please reload page or try again later.'));
    }
}
