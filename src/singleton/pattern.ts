export class Singleton {
  private static instance: Singleton
  private counter: number

  private constructor () {
    this.counter = 0
  }

  public static getInstance (): Singleton {
    if (Singleton.instance != null) return Singleton.instance

    Singleton.instance = new Singleton()

    return Singleton.instance
  }

  public incrementCounter (): void {
    this.counter += this.counter
  }
}
