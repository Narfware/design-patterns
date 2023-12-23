import { HyperCar, TourismCar } from './cars'
import { CarDealerShip } from './factories'

test('should be an instance of TourismCar', () => {
  const factory = new CarDealerShip()

  const car = factory.createCar(250)

  expect(car).toBeInstanceOf(TourismCar)
})

test('should be an instance of HyperCar', () => {
  const factory = new CarDealerShip()

  const car = factory.createCar(500)

  expect(car).toBeInstanceOf(HyperCar)
})
