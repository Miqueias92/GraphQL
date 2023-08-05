# GraphQL - Polimorfism

:construction: Building... :construction:

## Interface strategy

***TypeDefs***

```
interface Vehicle {
  id: ID!
  brand: String!
  model: String!
}

type Car implements Vehicle {
  id: ID!
  brand: String!
  model: String!
  numberOfDoors: Int!
}
  
type Motorcycle implements Vehicle {
  id: ID!
  brand: String!
  model: String!
  engineCapacity: Int!
}

type Query {
  vehicle: Vehicle
}

```

***Resolvers***

``` 
const car = {
  id: "1",
  brand: "Toyota",
  model: "Corola",
  numberOfDoors: 5,
  __typename: 'Car' // reference to type Car
}

const motorcycle = {
  id: "2",
  brand: "Honda",
  model: "Titan",
  engineCapacity: 150,
  __typename: 'Motorcycle' // reference to type Motorcycle
}

```

![Polimorfism](https://github.com/Miqueias92/GraphQL/blob/master/curso-graphql/polimorfism/assets/interface.png)


## Union strategy

***TypeDefs***

```
union Vehicle = Car | Motorcycle  

type Car {
  id: ID!
  brand: String!
  model: String!
  numberOfDoors: Int!
}
  
type Motorcycle {
  id: ID!
  brand: String!
  model: String!
  engineCapacity: Int!
}

type Query {
  vehicle: Vehicle
}
```


Resolvers
``` 
const car = {
  id: "1",
  brand: "Toyota",
  model: "Corola",
  numberOfDoors: 5,
  __typename: 'Car' // reference to type Car
}

const motorcycle = {
  id: "2",
  brand: "Honda",
  model: "Titan",
  engineCapacity: 150,
  __typename: 'Motorcycle' // reference to type Motorcycle
}

```

![Union](https://github.com/Miqueias92/GraphQL/blob/master/curso-graphql/polimorfism/assets/union.png)
