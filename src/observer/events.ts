import { type EventSubscriber, Event } from './event-bus'
import { type SayHello } from './say-hello'

export class MyEvent extends Event {
  static readonly EVENT_NAME = 'MY_EVENT'
  readonly name: string
  readonly phone: number

  constructor ({ name, phone }: { name: string, phone: number }) {
    super()
    this.name = name
    this.phone = phone
  }

  public toPrimitives (): { name: string, phone: number } {
    const { name, phone } = this

    return { name, phone }
  }

  public eventName (): string {
    return MyEvent.EVENT_NAME
  }
}

export class MyEventSubscriber implements EventSubscriber<MyEvent> {
  private readonly events = new Set<string>([MyEvent.EVENT_NAME])

  constructor (private readonly sayHello: SayHello) {
    this.sayHello = sayHello
  }

  subscribedTo (): Set<string> {
    return this.events
  }

  on (event: MyEvent): void {
    const { name } = event

    this.sayHello.execute({ name })
  }
}
