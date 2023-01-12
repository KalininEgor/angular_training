import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup  } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnDestroy{
    @Input() group!: AbstractControl;

    subscribe: Subscription = new Subscription();

    ngOnInit(): void {
        this.subscribe.add(
            this.formGroup.get('city')!.valueChanges.subscribe(value => {
                const zipControl: AbstractControl = this.formGroup.get('zip')!;
     
                if (value) {
                    zipControl.enable();
                } else {
                    zipControl.setValue('');
                    zipControl.disable();
                }   
            })
        )
        this.group.get('city')!.updateValueAndValidity();
    }

    get formGroup() {
        return this.group as FormGroup;
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }
}
