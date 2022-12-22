import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    @Input() formGroup!: FormGroup;
    @Input() buttonText!: string;
    @Output() submitted = new EventEmitter();

    submitForm() {
        this.submitted.emit();
    }
}
