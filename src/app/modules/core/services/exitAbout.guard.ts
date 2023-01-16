import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
    providedIn: 'root',
})
export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate> {
    constructor(public dialog: MatDialog) {}

    canDeactivate(
        component: ComponentCanDeactivate
    ): Observable<boolean> | boolean {
        if (component.canDeactivate()) {
            return true;
        }
        return this.dialog
            .open(DialogComponent, {
                data: { message: 'You have some unsaved changes' },
            })
            .afterClosed();
    }
}
