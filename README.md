# Design Patterns

This repository contains examples of various design patterns implemented in TypeScript. Understanding and applying design patterns can enhance the efficiency, maintainability, and scalability of your software projects.

## Table of Contents

- [Introduction](#introduction)
- [Design Patterns](#design-patterns)
  - [Singleton Pattern](#singleton-pattern)
  - [Factory Pattern](#factory-pattern)
  - [Observer Pattern](#observer-pattern)


## Introduction

Design patterns are proven solutions to recurring problems in software design. They represent best practices for solving common design problems and provide a way to communicate efficient and reusable designs.

This repository serves as a reference for different design patterns. Feel free to explore the examples and use them in your projects.

## Design Patterns

### Singleton Pattern

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance.

### Factory Pattern

The Factory Method design pattern belongs to the creational design pattern category and is used to provide an interface for creating objects in a superclass. It allows subclasses to alter the type of objects that will be created.
Use it when you need to decouple the code from the classes to be instantiated and the logic grows too large, encapsulate your different logics in each class and delegate the creation to the subclass of your factory.

### Observer Pattern (Event Bus)

The Observer Pattern, when implemented through an event bus, provides a flexible and decoupled communication mechanism for components in a system. The event bus serves as a centralized channel, allowing components to subscribe to and publish events. Publishers emit events to the bus, which then notifies all subscribed components. This pattern promotes loose coupling, as components remain unaware of each other, and facilitates extensibility, enabling the dynamic addition or removal of components without affecting the overall system. The Observer Pattern on an event bus enhances flexibility, maintainability and scalability in applications.
Use it to maintain the single responsability of your actions/use-cases and respect the open/closure principle.