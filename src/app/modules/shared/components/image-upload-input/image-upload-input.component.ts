import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-image-upload-input',
    templateUrl: './image-upload-input.component.html',
    styleUrls: ['./image-upload-input.component.scss'],
})
export class ImageUploadInputComponent{
    @Input() control!: AbstractControl<any, any>;
    @Input() titleTemplate!: string;

    imageName: string = '';
    
    onFileSelected($event: Event): void {
        this.control.markAsTouched();

        const file: File = ($event.target as HTMLInputElement).files![0];
        this.imageName = file.name;

        if (file && file.type.match(/image\/*/)) {
            this.control.setErrors(null);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.control.setValue(reader.result);
            }
        } else {
            this.control.setErrors({ invalidImage: true });
        }
    }
}
