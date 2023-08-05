const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da api    
    type Neto {
        id: String
        desc: String
        avo: String
    }
    
    type Filho {
        id: String
        desc: String
        neto: Neto
        pai: String
    }
    
    type Pai {
        id: String
        desc: String
        filho: Filho
    }

    type Query {
       ola: String
       pai: Pai 
    }
`
const resolvers = {
    Query: {
        ola() {
            return 'Olla'
        },
        pai(son) {
            console.log('resolvendo o pai', son)
            return { 
                id: '1',
                desc: 'Olá eu sou o Pai' 
            }
        }
    },
    Pai: {
        filho(parent) {
            console.log('resolvendo o filho')
            console.log('resolver filho', {parent})
            return parent.filho = {
                id: '2',
                desc: 'Olá eu sou o filho',
                pai: parent.desc
            }
        }
    },
    Filho: {
        neto(parent) {
            console.log('resolvendo o neto')
            console.log('resolver neto', {parent})

            console.log('Olá estou acessando pai pelo neto: ', parent.pai)

            return parent.neto = {
                id: '3',
                desc: 'Olá eu sou o neto',
                avo: parent.pai
            }
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