import { type CarFactory } from './factories'
import { type VINData } from './car'

// VIN (Vehicle identification number) DECODER (invented)
//
// HO19906297724 => 13 characters post-1981 (Global)
//    -> HO = Manufacturer (HONDA)
//    -> 1990 = Year
//    -> 6 = Cylinders
//    -> 2977 = cm3
//    -> 24 = Valves
//
// 81198020004 => 11 characters pre-1981 (Asian)
//    -> 81 = Pre 1981 prefix
//    -> 1980 = Year
//    -> 2000 = cm3
//    -> 4 = Cylinders
//
// 8119802000ABFF => 14 characters pre-1981 (European)
//    -> 81 = Pre 1981 prefix
//    -> 1980 = Year
//    -> 2000 = cm3
//    -> ABF = Motor code
//    -> F = Transmission (Front)

export class Application {
  constructor (private readonly factory: CarFactory) {
    this.factory = factory
  }

  public execute (VIN: string): VINData {
    return this.factory.retrieveVINData(VIN)
  }
}
