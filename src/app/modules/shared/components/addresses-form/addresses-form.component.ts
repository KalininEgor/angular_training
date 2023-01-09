import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addresses-form',
    templateUrl: './addresses-form.component.html',
    styleUrls: ['./addresses-form.component.scss'],
})
export class AddressesFormComponent implements OnInit {
    @Input() parentForm!: FormGroup;
    @Output() formReady = new EventEmitter<FormArray>();

    constructor( private fb: FormBuilder ) {}
    
    addressesArray: FormArray = this.fb.array([this.createAddressGroup()]);

    ngOnInit(): void {
        this.formReady.emit(this.addressesArray);
    }

    createAddressGroup (): FormGroup {
        return this.fb.group({
            addressLine: [null, Validators.required],
            city: [null],
            zip: [{value: null, disabled: true}]
        });
    }

    addAddressGroup(): void {
        this.addressesArray.push(this.createAddressGroup());
    }

    removeAddressGroup(index: number): void {
        this.addressesArray.removeAt(index);
    }

    updateZipValidation($event: Event, zipControl: AbstractControl) {
        const target = $event.target as HTMLInputElement;

        if (target.value) {
            zipControl.enable();
            zipControl.setValidators(Validators.required);
        } else {
            zipControl.disable();
            zipControl.removeValidators(Validators.required);
            zipControl.setValue('');
        }
        
        zipControl.updateValueAndValidity();
    }
}
