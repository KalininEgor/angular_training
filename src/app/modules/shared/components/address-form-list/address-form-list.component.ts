import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-address-form-list',
    templateUrl: './address-form-list.component.html',
    styleUrls: ['./address-form-list.component.scss'],
})
export class AddressFormListComponent implements OnInit {
    @Output() formReady = new EventEmitter<FormGroup>();

    addressesForm: FormGroup = this.fb.group({
        addresses: this.fb.array([this.createAddressGroup()])
    });

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
       this.formReady.emit(this.addressesForm); 
    }

    get addresses() {
        return this.addressesForm.get('addresses') as FormArray;
    }

    createAddressGroup(): FormGroup {
        return this.fb.group({
            addressLine: [null, Validators.required],
            city: [null],
            zip: [{value: null, disabled: true}, Validators.required]
        });
    }

    addAddressGroup(): void {
       this.addresses.push(this.createAddressGroup()); 
    }

    removeAddressGroup(index: number): void {
        this.addresses.removeAt(index); 
    }
}
