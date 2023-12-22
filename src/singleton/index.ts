import { type Logger as WinstonLogger, createLogger, transports } from 'winston'

export interface Logger {
  info: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void

}

export class ConsoleLogger implements Logger {
  private static instance: ConsoleLogger
  private readonly logger: WinstonLogger

  private constructor () { // Avoid manual instantiations
    this.logger = this.createWinstonLogger() // Only called once
  }

  private createWinstonLogger (): WinstonLogger {
    return createLogger({
      level: 'info',
      transports: [
        new transports.Console()
      ]
    })
  }

  public static getInstance (): ConsoleLogger {
    if (ConsoleLogger.instance != null) return ConsoleLogger.instance

    ConsoleLogger.instance = new ConsoleLogger()

    return ConsoleLogger.instance
  }

  public info (message: string): void {
    this.logger.info(message)
  }

  public error (message: string): void {
    this.logger.error(message)
  }

  public warning (message: string): void {
    this.logger.warning(message)
  }
}
