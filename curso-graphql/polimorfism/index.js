const { ApolloServer, gql } = require('apollo-server')

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function geradorVeiculos() {
  
  const carro = {
    id: "1",
    marca: "Toyota",
    modelo: "Corola",
    numeroDePortas: 4,
    __typename: 'Carro' 
  }

  const moto = {
    id: "2",
    marca: "Honda",
    modelo: "Titan",
    cilindradas: 150,
    __typename: 'Moto' 
  }

  const caminhao = {
    id: "3",
    marca: "Scania",
    modelo: "Modelo Scania",
    capacidadeDeCarga: 1500.00,
    __typename: 'Caminhao' 
  }

  const onibus = {
    id: "4",
    marca: "Mercedes",
    modelo: "Onibus de viagem",
    quantidadeAssentos: 56,
    __typename: 'Onibus' 
  }

  return [ carro, moto, caminhao, onibus ];
}

const typeDefs = gql`
  
  interface Veiculo {
    id: ID!
    marca: String!
    modelo: String!
  }

  type Carro implements Veiculo {
    id: ID!
    marca: String!
    modelo: String!
    numeroDePortas: Int!
  }
  
  type Moto implements Veiculo {
    id: ID!
    marca: String!
    modelo: String!
    cilindradas: Int!
  }
  
  type Caminhao implements Veiculo {
    id: ID!
    marca: String!
    modelo: String!
    capacidadeDeCarga: Float!
  }

  type Onibus implements Veiculo {
    id: ID!
    marca: String!
    modelo: String!
    quantidadeAssentos: Int!
  }

  type Query {
    veiculos: [Veiculo!]!
    veiculo: Veiculo
  }

`
const resolvers = {
  Query: {
    veiculos() {
      return geradorVeiculos()
    },

    veiculo() {
      return geradorVeiculos().random()
    }
  },
  Veiculo: {
    __resolveType(obj) {
      return obj.__typename;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})
  
server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)  
})