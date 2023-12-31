export const UNKNOWN = 'UNKNOWN'

export interface CarStrategy {
  isValidVIN(vin: string): boolean
  extractManufacturer(vin: string): string
  extractYear(vin: string): number
  extractCylinders(vin: string): number
  extractCubicCentimeters(vin: string): number
  extractValves(vin: string): number
  extractMotorCode(vin: string): string
  extractTransmission (vin: string): string
}

export class GlobalStrategy implements CarStrategy {
  extractManufacturer (vin: string): string {
    return vin.substring(0, 2)
  }

  extractYear (vin: string): number {
    return Number(vin.substring(2, 6))
  }

  extractCylinders (vin: string): number {
    return Number(vin.substring(6, 7))
  }

  extractCubicCentimeters (vin: string): number {
    return Number(vin.substring(7, 11))
  }

  extractValves (vin: string): number {
    return Number(vin.substring(11))
  }

  extractMotorCode (vin: string): string {
    return UNKNOWN
  }

  extractTransmission (vin: string): string {
    return UNKNOWN
  }

  isValidVIN (vin: string): boolean {
    return vin.length === 13
  }
}

export class AsianStrategy implements CarStrategy {
  extractManufacturer (vin: string): string {
    return UNKNOWN
  }

  extractYear (vin: string): number {
    return Number(vin.substring(2, 6))
  }

  extractCylinders (vin: string): number {
    return Number(vin.substring(10))
  }

  extractCubicCentimeters (vin: string): number {
    return Number(vin.substring(6, 10))
  }

  extractValves (vin: string): number {
    return 0
  }

  extractMotorCode (vin: string): string {
    return UNKNOWN
  }

  extractTransmission (vin: string): string {
    return UNKNOWN
  }

  isValidVIN (vin: string): boolean {
    return vin.length === 11
  }
}

export class EuropeanStrategy implements CarStrategy {
  extractManufacturer (vin: string): string {
    return UNKNOWN
  }

  extractYear (vin: string): number {
    return Number(vin.substring(2, 6))
  }

  extractCylinders (vin: string): number {
    return 0
  }

  extractCubicCentimeters (vin: string): number {
    return Number(vin.substring(6, 10))
  }

  extractValves (vin: string): number {
    return 0
  }

  extractMotorCode (vin: string): string {
    return vin.substring(10, 13)
  }

  extractTransmission (vin: string): string {
    return vin.substring(13)
  }

  isValidVIN (vin: string): boolean {
    return vin.length === 14
  }
}

export class NullStrategy implements CarStrategy {
  extractManufacturer (vin: string): string {
    return UNKNOWN
  }

  extractYear (vin: string): number {
    return 0
  }

  extractCylinders (vin: string): number {
    return 0
  }

  extractCubicCentimeters (vin: string): number {
    return 0
  }

  extractValves (vin: string): number {
    return 0
  }

  extractMotorCode (vin: string): string {
    return UNKNOWN
  }

  extractTransmission (vin: string): string {
    return UNKNOWN
  }

  isValidVIN (vin: string): boolean {
    return false
  }
}
