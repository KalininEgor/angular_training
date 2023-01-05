import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-image-upload-input',
    templateUrl: './image-upload-input.component.html',
    styleUrls: ['./image-upload-input.component.scss'],
})
export class ImageUploadInputComponent implements OnInit {
    @Input() parentForm!: FormGroup;
    @Input() titleTemplate!: string;

    imageControl: FormControl = new FormControl(null);
    imageName: string = '';

    ngOnInit(): void {
        this.parentForm.addControl('imageUrl', this.imageControl);
    }

    onFileSelected($event: Event): void {
        this.imageControl?.markAsTouched();

        const file: File = ($event.target as HTMLInputElement).files![0];
        this.imageName = file.name;

        if (file && file.type.match(/image\/*/)) {
            this.imageControl?.setErrors(null);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageControl?.setValue(reader.result);
            }
        } else {
            this.imageControl?.setErrors({ invalidImage: true });
        }
    }

    clearFile(fileUploadInput: HTMLInputElement): void {
        fileUploadInput.files = new DataTransfer().files;

        this.imageControl?.setValue(null);
        this.imageControl?.setErrors(null);

        this.imageName = '';
    }
}
