import { type VINDecoderStrategy } from './strategies'

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

export interface VINDecoder {
  retrieveVINData (): VINData
  isValidVIN (): boolean
  isGlobalCar (): boolean
  isEuropeanCar (): boolean
  isAsianCar (): boolean
  assignStrategy (strategy: VINDecoderStrategy): void
}

export class Car implements VINDecoder {
  private readonly VIN: string
  private decoderStrategy: VINDecoderStrategy

  constructor (VIN: string, strategy: VINDecoderStrategy) {
    this.VIN = VIN
    this.decoderStrategy = strategy
  }

  public retrieveVINData (): VINData {
    return {
      manufacturer: this.decoderStrategy.extractManufacturer(this.VIN),
      year: this.decoderStrategy.extractYear(this.VIN),
      cylinders: this.decoderStrategy.extractCylinders(this.VIN),
      cubicCentimeters: this.decoderStrategy.extractCubicCentimeters(this.VIN),
      valves: this.decoderStrategy.extractValves(this.VIN),
      motorCode: this.decoderStrategy.extractMotorCode(this.VIN),
      transmission: this.decoderStrategy.extractTransmission(this.VIN)
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
    return this.decoderStrategy.isValidVIN(this.VIN)
  }

  public assignStrategy (strategy: VINDecoderStrategy): void {
    this.decoderStrategy = strategy
  }
}
