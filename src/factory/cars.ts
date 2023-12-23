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
