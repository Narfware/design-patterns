import { EventEmitter } from 'events'
import { type EventBus, type Event, type EventSubscriber } from './event-bus'

export class InMemoryAsyncEventBus extends EventEmitter implements EventBus {
  async publish (events: Event[]): Promise<void> {
    events.forEach(event => this.emit(event.eventName(), event))
  }

  public addSubscribers (subscribers: Set<EventSubscriber<Event>>): void {
    subscribers.forEach(subscriber => {
      this.attachSubscriberToEvent(subscriber.subscribedTo(), subscriber)
    })
  }

  private attachSubscriberToEvent (subscribedTo: Set<string>, subscriber: EventSubscriber<Event>): void {
    subscribedTo.forEach(event => {
      this.on(event, subscriber.on.bind(subscriber))
    })
  }
}
