export abstract class Car {
  private readonly horsepower: number
  private speed: number
  private readonly airResistance: number

  constructor (horsepower: number, speed = 0, airResistance: number) {
    this.horsepower = horsepower
    this.speed = speed
    this.airResistance = airResistance
  }

  public accelerate (time: number, throttle: number): void {
    this.speed += ((0.5 * this.horsepower * time * throttle) / 1000) - (this.airResistance / 1000)
  }

  public brake (time: number, throttle: number): void {
    this.speed -= ((0.2 * this.horsepower * time * throttle) / 1000) + (this.airResistance / 1000)

    if (this.speed < 0) {
      this.speed = 0
    }
  }

  abstract something (): void
}

export class HyperCar extends Car {
  constructor (horsepower: number, speed = 0, airResistance = 0.1) {
    super(horsepower, speed, airResistance)
  }

  public something (): void {
    console.log('im a hypercar')
  }
}

export class TourismCar extends Car {
  constructor (horsepower: number, speed = 0, airResistance = 0.5) {
    super(horsepower, speed, airResistance)
  }

  public something (): void {
    console.log('im a tourism car')
  }
}

export abstract class CarFactory {
  abstract createCar (horsepower: number): Car

  someOperation (horsepower: number): void {
    const car = this.createCar(horsepower)

    car.something()
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

class MyApplication {
  private readonly factory: CarFactory

  constructor (factory: CarFactory) {
    this.factory = factory
  }

  public execute (): void {
    this.factory.someOperation(252) // im a tourism car
    this.factory.someOperation(550) // im a hypercar
  }
}

const myApp = new MyApplication(new CarDealerShip())

myApp.execute()
