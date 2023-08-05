const { ApolloServer, gql } = require('apollo-server')

const veiculoService = require('./veiculoService')

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
      return veiculoService.list()
    },

    veiculo() {
      return veiculoService.get()
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