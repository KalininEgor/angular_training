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
    @Input() initialArray?: FormArray
    @Output() formReady = new EventEmitter<FormGroup>();

    addressesForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.addressesForm = this.fb.group({
            addresses: this.initialArray || this.fb.array([this.fb.group({})]),
        });
        this.formReady.emit(this.addressesForm);
    }

    get addresses() {
        return this.addressesForm.get('addresses') as FormArray;
    }

    addAddressGroup(): void {
        this.addresses.push(this.fb.group({}));
    }

    removeAddressGroup(index: number): void {
        this.addresses.removeAt(index);
    }
}