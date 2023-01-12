import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { IAddress } from '../../models/address.interface';

@Component({
    selector: 'app-address-form-list',
    templateUrl: './address-form-list.component.html',
    styleUrls: ['./address-form-list.component.scss'],
})
export class AddressFormListComponent implements OnInit {
    @Input() initialdata?: Observable<any>;
    @Output() formReady = new EventEmitter<FormGroup>();

    addressesForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.addressesForm = this.fb.group({
            addresses: this.fb.array([this.createAddressGroup()]),
        });

        if (this.initialdata) this.initEditAddresses();

        this.formReady.emit(this.addressesForm);
    }

    get addresses() {
        return this.addressesForm.get('addresses') as FormArray;
    }

    initEditAddresses() {
        this.initialdata!.pipe(take(1)).subscribe(data => {
            const addressesData: IAddress[] = data.addresses;

            while (this.addresses.controls.length < addressesData.length) {
                this.addAddressGroup();
            }

            this.addresses.patchValue(addressesData);
        });
    }

    createAddressGroup(): FormGroup {
        return this.fb.group({
            addressLine: [null, Validators.required],
            city: [null],
            zip: [{ value: null, disabled: true }, Validators.required],
        });
    }

    addAddressGroup(): void {
        this.addresses.push(this.createAddressGroup());
    }

    removeAddressGroup(index: number): void {
        this.addresses.removeAt(index);
    }
}
