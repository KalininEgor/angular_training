import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from './dialog.service';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate> {

    constructor( private dialogService: DialogService) {}

    canDeactivate(
        component: ComponentCanDeactivate
    ): Observable<boolean> | boolean {
        return !component.canDeactivate() ? this.dialogService.confirmLeave('You have some unsaved changes. Do you want to leave this page?') : true;
    }
}
