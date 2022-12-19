import { Injectable } from '@angular/core';
import { cars } from '../mocks/cars';
import { ICar } from '../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  getCars(): ICar[] {
    return cars
  }
}
