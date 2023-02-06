import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gender',
})
export class GenderPipe implements PipeTransform {
    transform(value: boolean): unknown {
        return value ? 'Male' : 'Female';
    }
}
