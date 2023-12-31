import { Car, type VINDecoder, type VINData } from './car'
import { AsianVINDecoderStrategy, EuropeanVINDecoderStrategy, NullStrategy, GlobalVINDecoderStrategy } from './strategies'

export abstract class CarFactory {
  abstract createCar (VIN: string): VINDecoder

  public retrieveVINData (VIN: string): VINData {
    const car = this.createCar(VIN)

    return car.retrieveVINData()
  }
}

export class VINDecoderFactory extends CarFactory {
  public createCar (VIN: string): VINDecoder {
    const nullStrategy = new NullStrategy()

    const car = new Car(VIN, nullStrategy)

    if (car.isGlobalCar()) car.assignStrategy(new GlobalVINDecoderStrategy())
    if (car.isEuropeanCar()) car.assignStrategy(new EuropeanVINDecoderStrategy())
    if (car.isAsianCar()) car.assignStrategy(new AsianVINDecoderStrategy())

    if (!car.isValidVIN()) car.assignStrategy(nullStrategy)

    return car
  }
}
