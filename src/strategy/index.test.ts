import { Application } from '.'
import { type VINData } from './car'
import { VINDecoderFactory } from './factories'
import { UNKNOWN } from './strategies'

test('should extract the VIN data from GLOBAL VIN', () => {
  const globalVIN = 'HO19906297724'

  const VINData = new Application(new VINDecoderFactory()).execute(globalVIN) // Honda NSX

  const expectedData: VINData = {
    manufacturer: 'HO',
    year: 1990,
    cylinders: 6,
    cubicCentimeters: 2977,
    valves: 24,
    motorCode: UNKNOWN,
    transmission: UNKNOWN
  }

  expect(VINData).toStrictEqual(expectedData)
})

test('should extract the VIN data from Asian VIN', () => {
  const asianVIN = '81198020004'

  const VINData = new Application(new VINDecoderFactory()).execute(asianVIN)

  const expectedData: VINData = {
    manufacturer: UNKNOWN,
    year: 1980,
    cylinders: 4,
    cubicCentimeters: 2000,
    valves: 0,
    motorCode: UNKNOWN,
    transmission: UNKNOWN
  }

  expect(VINData).toStrictEqual(expectedData)
})

test('should extract the VIN data from European VIN', () => {
  const europeanVIN = '8119802000ABFF'

  const VINData = new Application(new VINDecoderFactory()).execute(europeanVIN)

  const expectedData: VINData = {
    manufacturer: UNKNOWN,
    year: 1980,
    cylinders: 0,
    cubicCentimeters: 2000,
    valves: 0,
    motorCode: 'ABF',
    transmission: 'F'
  }

  expect(VINData).toStrictEqual(expectedData)
})

test('should return VIN data when an invalid VIN is received', () => {
  const invalidVIN = '1995FRNKNULLOBJECTPATTERN'

  const VINData = new Application(new VINDecoderFactory()).execute(invalidVIN)

  const expectedData: VINData = {
    manufacturer: UNKNOWN,
    year: 0,
    cylinders: 0,
    cubicCentimeters: 0,
    valves: 0,
    motorCode: UNKNOWN,
    transmission: UNKNOWN
  }

  expect(VINData).toStrictEqual(expectedData)
})
