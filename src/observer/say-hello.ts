export class SayHello {
  public execute ({ name }: { name: string }): void {
    console.log(`Hello ${name}`)
  }
}
