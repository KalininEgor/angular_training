import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dob',
})
export class DobPipe implements PipeTransform {
    transform(age: number): string {
        return `${new Date().getFullYear() - age} birth year`;
    }
}
