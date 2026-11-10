# Type vs Interface in TypeScript

## Introduction

Type aliases and interfaces are both used to define the structure and shape of data in TypeScript. They help developers write clean, reusable, and type-safe code. Although they look similar, they have some important differences.

## Detailed Explanation

An **interface** is mainly used to define the structure of objects. It describes which properties and methods an object should have.

```ts
interface User {
  name: string
  age: number
}
```

A **type alias** can also define object structures, but it is more flexible. It can define primitive types, unions, intersections, tuples, and other types.

```ts
type User = {
  name: string
  age: number
}

type Status = 'active' | 'inactive'
```

Another important difference is that interfaces support declaration merging. This means we can declare the same interface multiple times, and TypeScript combines their properties. Type aliases do not support declaration merging.

Both interfaces and type aliases support inheritance-like behavior. Interfaces use `extends`, while type aliases commonly use intersection (`&`).

## Conclusion

Both are useful in TypeScript. I would choose interfaces when defining object structures, especially when working with classes or extending existing structures. I would choose type aliases when working with unions, intersections, or more complex types. The choice depends on the situation and project requirements.
