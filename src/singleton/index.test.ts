import { ConsoleLogger } from '.'
jest.mock('.')

test('logger should instance only once', () => {
  const loggerOne = ConsoleLogger.getInstance()
  const loggerTwo = ConsoleLogger.getInstance()

  expect(ConsoleLogger).toHaveBeenCalledTimes(0)
  expect(loggerOne).toStrictEqual(loggerTwo)
})
