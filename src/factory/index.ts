import { CarDealerShip, type CarFactory } from './factories'

class Application {
  private readonly factory: CarFactory

  constructor (factory: CarFactory) {
    this.factory = factory
  }

  public execute (horsepower: number): void {
    this.factory.someOperation(horsepower) // im a hyper car
  }

  // EXAMPLE without factory
  //
  // High coupling (the "client" class know the instances), new conditionals to extend the logic, open closure not respected.
  //
  // public execute (horsepower: number): void {
  //   if (horsepower >= 300) {
  //     new HyperCar(horsepower).something()
  //   } else {
  //     new TourismCar(horsepower).something()
  //   }
  // }
}

const myApp = new Application(new CarDealerShip())

myApp.execute(550)
