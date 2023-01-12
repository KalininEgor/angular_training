import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor() {}

    confirmLeave(message?: string): Observable<boolean> {
        return of(window.confirm(message || 'You really want to leave?'));
    }
}
