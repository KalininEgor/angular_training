import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnDestroy{
    @Input() group!: AbstractControl;

    subscribe: Subscription = new Subscription();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formGroup.addControl('addressLine', this.fb.control(null, Validators.required));
        this.formGroup.addControl('city', this.fb.control(null));
        this.formGroup.addControl('zip', new FormControl({value: null, disabled: true}, Validators.required));

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
    }

    get formGroup() {
        return this.group as FormGroup;
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }
}
