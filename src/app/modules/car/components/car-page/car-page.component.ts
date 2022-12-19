import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  cars: ICar[] = [];
  favoriteCars: ICar[] = [];
  constructor(
    private carService: CarService,
    private favoritesService: FavoritesService
  ) {}
  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.favoriteCars = this.favoritesService.getFavoriteCars();
  }
  changeFavorite(item: ICar) {
    this.favoriteCars = this.favoritesService.updateFavoriteCars(item)
  }
}
