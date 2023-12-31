import { type CarStrategy } from './strategies'

export enum VINTypes {
  PRE_1981_VIN_TYPE = '81',
}

export interface VINData {
  manufacturer: string
  year: number
  cylinders: number
  cubicCentimeters: number
  valves: number
  motorCode: string
  transmission: string
}

export interface Car {
  retrieveVINData (): VINData
  isValidVIN (): boolean
  isGlobalCar (): boolean
  isEuropeanCar (): boolean
  isAsianCar (): boolean
  assignStrategy (strategy: CarStrategy): void
}

export class CarDecoder implements Car {
  private readonly VIN: string
  private strategy: CarStrategy

  constructor (VIN: string, strategy: CarStrategy) {
    this.VIN = VIN
    this.strategy = strategy
  }

  public retrieveVINData (): VINData {
    return {
      manufacturer: this.strategy.extractManufacturer(this.VIN),
      year: this.strategy.extractYear(this.VIN),
      cylinders: this.strategy.extractCylinders(this.VIN),
      cubicCentimeters: this.strategy.extractCubicCentimeters(this.VIN),
      valves: this.strategy.extractValves(this.VIN),
      motorCode: this.strategy.extractMotorCode(this.VIN),
      transmission: this.strategy.extractTransmission(this.VIN)
    }
  }

  public isGlobalCar (): boolean {
    return !this.VIN.startsWith(VINTypes.PRE_1981_VIN_TYPE) && this.VIN.length === 13
  }

  public isEuropeanCar (): boolean {
    return this.VIN.startsWith(VINTypes.PRE_1981_VIN_TYPE) && this.VIN.length === 14
  }

  public isAsianCar (): boolean {
    return this.VIN.startsWith(VINTypes.PRE_1981_VIN_TYPE) && this.VIN.length === 11
  }

  public isValidVIN (): boolean {
    return this.strategy.isValidVIN(this.VIN)
  }

  public assignStrategy (strategy: CarStrategy): void {
    this.strategy = strategy
  }
}
