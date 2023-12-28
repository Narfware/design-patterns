export abstract class Event {
  static readonly EVENT_NAME: string
  readonly eventName: string

  constructor ({ eventName }: { eventName: string }) {
    this.eventName = eventName
  }

  abstract toPrimitives (): any
}

export interface EventSubscriber<T extends Event> {
  subscribedTo(): Set<string>
  on(event: T): void
}

export interface EventBus {
  publish: (events: Event[]) => void
  addSubscribers: (subscribers: Set<EventSubscriber<Event>>) => void
}
