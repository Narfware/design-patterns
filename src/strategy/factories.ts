import { CarDecoder, type Car, type VINData } from './car'
import { AsianStrategy, EuropeanStrategy, NullStrategy, GlobalStrategy } from './strategies'

export abstract class CarFactory {
  abstract createCar (VIN: string): Car

  public retrieveVINData (VIN: string): VINData {
    const car = this.createCar(VIN)

    return car.retrieveVINData()
  }
}

export class VINDecoderFactory extends CarFactory {
  public createCar (VIN: string): Car {
    const nullStrategy = new NullStrategy()

    const car = new CarDecoder(VIN, nullStrategy)

    if (car.isGlobalCar()) car.assignStrategy(new GlobalStrategy())
    if (car.isEuropeanCar()) car.assignStrategy(new EuropeanStrategy())
    if (car.isAsianCar()) car.assignStrategy(new AsianStrategy())

    if (!car.isValidVIN()) car.assignStrategy(nullStrategy)

    return car
  }
}
