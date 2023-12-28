import { type Event, type EventBus, type EventSubscriber } from './event-bus'

export class InMemoryEventBus implements EventBus {
  private readonly subscribers = new Map<string, Set<EventSubscriber<Event>>>()

  public publish (events: Event[]): void {
    events.forEach(event => { this.handleEvent(event, this.subscribers.get(event.eventName)) })
  }

  public addSubscribers (subscribers: Set<EventSubscriber<Event>>): void {
    subscribers.forEach(subscriber => {
      this.attachSubscriberToEvent(subscriber.subscribedTo(), subscriber)
    })
  }

  private attachSubscriberToEvent (subscribedTo: Set<string>, subscriber: EventSubscriber<Event>): void {
    subscribedTo.forEach(eventName => {
      const event = this.subscribers.get(eventName)

      if (event != null) {
        event.add(subscriber)
        return
      }

      this.subscribers.set(eventName, new Set<EventSubscriber<Event>>().add(subscriber))
    })
  }

  private handleEvent (event: Event, subscribers?: Set<EventSubscriber<Event>>): void {
    subscribers?.forEach(subscriber => { subscriber.on(event) })
  }
}
