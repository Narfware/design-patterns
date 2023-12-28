import { type EventBus, type Event, type EventSubscriber } from './event-bus'
import { MyEvent, MyEventSubscriber } from './events'
import { InMemoryEventBus } from './in-memory-event-bus'
import { SayHello } from './say-hello'

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
