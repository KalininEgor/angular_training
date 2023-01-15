import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
    @Output() searchFieldReady: EventEmitter<Observable<string>> = new EventEmitter();

    searchControl: FormControl = new FormControl(null);

    ngOnInit(): void {
        this.searchFieldReady.emit(this.searchControl.valueChanges.pipe(
            debounceTime(500),
            map(value => value.trim().toLowerCase()),
            distinctUntilChanged()
        ));
    }
    
}
