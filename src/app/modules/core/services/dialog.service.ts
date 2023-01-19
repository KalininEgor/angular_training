import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(public dialog: MatDialog) {}

    confirmLeave(message?: string): Observable<boolean> {
        return this.dialog.open(DialogComponent, {
            data: {message: message}
        }).afterClosed()
    }
}
