import { type Car, HyperCar, TourismCar } from './cars'

export abstract class CarFactory {
  abstract createCar (horsepower: number): Car

  someOperation (horsepower: number): void {
    this.createCar(horsepower).something()
  }
}

export class HyperCarFactory extends CarFactory {
  createCar (horsepower: number): Car {
    return new HyperCar(horsepower)
  }
}

export class TourismCarFactory extends CarFactory {
  createCar (horsepower: number): Car {
    return new TourismCar(horsepower)
  }
}

export class CarDealerShip extends CarFactory {
  createCar (horsepower: number): Car {
    if (horsepower >= 300) return new HyperCar(horsepower)

    return new TourismCar(horsepower)
  }
}
