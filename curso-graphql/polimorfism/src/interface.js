const { ApolloServer, gql } = require('apollo-server');

const veiculoService = require('./veiculoService');

const typeDefs = gql`

  type MeuType {
    id: ID!
    teste: String!
    transporte: Veiculo
  }

  interface Veiculo {
    id: ID!
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
    type: String!
    url: String!
  }
  
  type Caminhao implements Veiculo {
    id: ID!
    marca: String!
    capacidadeDeCarga: Float!
  }

  type Onibus implements Veiculo {
    id: ID!
    marca: String!
    quantidadeAssentos: Int!
  }

  type Query {
    veiculos: [Veiculo!]!
    veiculo: Veiculo
    meuType: MeuType
  }
`;

const resolvers = {
  Query: {
    veiculos() {
      return veiculoService.list();
    },

    veiculo() {
      return veiculoService.get();
    },

    meuType() {
      return {
        id: "123123",
        teste: "Olá eu sou o meuType"
      }
    }
  },
  MeuType: {
    transporte() {
      return veiculoService.get()
    }
  },
  Veiculo: {
    __resolveType(obj) {
      return obj.__typename;
    }
  },
  Moto: {
    type(parent) {

      if(parent.type == 'Dinamico') {
        parent.url = "teste.com"  
      }      
      return parent.type;
    }
  },
  Carro: {

  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});