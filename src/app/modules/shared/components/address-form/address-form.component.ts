import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup  } from '@angular/forms';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit{
    @Input() group!: AbstractControl;

    ngOnInit(): void {
        this.formGroup.get('city')!.valueChanges.subscribe(value => {
            const zipControl: AbstractControl = this.formGroup.get('zip')!;
 
            if (value) {
                zipControl.enable();
            } else {
                zipControl.setValue('');
                zipControl.disable();
            }   
        });
    }

    get formGroup() {
        return this.group as FormGroup
    }















   /*  @Output() formReady = new EventEmitter<FormGroup>();

    addressFormGroup: FormGroup = this.fb.group({
        addressLine: [null, Validators.required],
        city: [null],
        zip: [{value: null, disabled: true}, Validators.required]
    });

    constructor( private fb: FormBuilder ) {}

    ngOnInit(): void {
        this.addressFormGroup.get('city')!.valueChanges.subscribe(value => {
           const zipControl: AbstractControl = this.addressFormGroup.get('zip')!;

           if (value) {
               zipControl.enable();
           } else {
               zipControl.setValue('');
               zipControl.disable();
           }   
       });
       this.formReady.emit(this.addressFormGroup);
   }  */

    /* createGroup() {
        this.addressFormGroup = this.fb.group({
            addressLine: [null, Validators.required],
            city: [null],
            zip: [{value: null, disabled: true}, Validators.required]
        });

        return this.addressFormGroup
    } */
    
    /* constructor(private fb: FormBuilder) {}

    addressGroup = this.fb.group({
        addressLine: [null, Validators.required],
        city: [null],
        zip: [{value: null, disabled: true}, Validators.required]
    });

    createAddressGroup(): FormGroup {
        this.addressGroup.get('city')!.valueChanges.subscribe(value => {
            const zipControl: AbstractControl = this.addressGroup.get('zip')!;

            if (value) {
                zipControl.enable();
            } else {
                zipControl.setValue('');
                zipControl.disable();
            }   
        });

        return this.addressGroup
    }

    /* addressGroup: FormGroup = this.fb.group({
        addressLine: [null, Validators.required],
        city: [null],
        zip: [{value: null, disabled: true}, Validators.required]
    }); 

    
    */
}
