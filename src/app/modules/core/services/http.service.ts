import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServiceOptions } from '../models/http-options.interface';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    constructor(private http: HttpClient) {}

    get<T>(
        url: string,
        optionsObj: HttpServiceOptions = {}
    ): Observable<T> {
        const options: Object = this.buildRequestOptions(optionsObj);

        return this.http.get<T>(this.buildFullURL(url), options)
            .pipe(catchError(this.handleError));
    }

    post<T>(
        url: string,
        body: any,
        optionsObj: HttpServiceOptions = {}
    ): Observable<T> {
        const options: Object = this.buildRequestOptions(optionsObj);

        return this.http.post<T>(this.buildFullURL(url), body, options)
            .pipe(catchError(this.handleError));
    }

    put<T>(
        url: string,
        body: any,
        optionsObj: HttpServiceOptions = {}
    ): Observable<any> {
        const options: Object = this.buildRequestOptions(optionsObj);

        return this.http.put<T>(this.buildFullURL(url), body, options)
            .pipe(catchError(this.handleError));
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

    buildRequestOptions(options: HttpServiceOptions): Object {
        return {
            headers: options.headers || {},
            params: options.params || [],
            observe: options.observe || 'response' as const,
            responseType: options.responseType || 'json' as const
        }
    }

    buildFullURL(urlPart: string): string {
        return environment.apiUrl + urlPart + environment.seed
    }
}
