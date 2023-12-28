import { type EventBus, Event, type EventSubscriber } from './event-bus'
import { InMemoryEventBus } from './in-memory-event-bus'

class SayHello {
  public execute ({ name }: { name: string }): void {
    console.log(`Welcome ${name}`)
  }
}

class MyEvent extends Event {
  static readonly EVENT_NAME = 'MY_EVENT'
  private readonly name: string
  private readonly phone: number

  constructor ({ name, phone }: { name: string, phone: number }) {
    super({ eventName: MyEvent.EVENT_NAME })
    this.name = name
    this.phone = phone
  }

  public toPrimitives (): { name: string, phone: number } {
    return { name: this.name, phone: this.phone }
  }
}

class MyEventSubscriber implements EventSubscriber<MyEvent> {
  constructor (private readonly sayHello: SayHello) {
    this.sayHello = sayHello
  }

  subscribedTo (): Set<string> {
    return new Set<string>([MyEvent.EVENT_NAME])
  }

  on (event: MyEvent): void {
    const { name } = event.toPrimitives()

    this.sayHello.execute({ name })
  }
}

class Application {
  private readonly eventBus: EventBus

  constructor (eventBus: EventBus) {
    this.eventBus = eventBus
  }

  public execute (): void {
    const myEvent = new MyEvent({ name: 'frank', phone: 666 })

    this.eventBus.publish([myEvent])
  }
}

const eventBus = new InMemoryEventBus()

const subscribers = new Set<EventSubscriber<Event>>([new MyEventSubscriber(new SayHello())])

eventBus.addSubscribers(subscribers)

new Application(eventBus).execute()
