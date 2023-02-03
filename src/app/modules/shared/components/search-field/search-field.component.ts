import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit, OnDestroy {
    @Output() searchValueChanged: EventEmitter<string> = new EventEmitter();

    destroyed: Subject<void> = new Subject();
    searchControl: FormControl = new FormControl(null);

    ngOnInit(): void {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this.destroyed)
            )
            .subscribe(searchValue => {
                this.searchValueChanged.emit(searchValue);
            });   
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }
    
}
