const  fs = require('fs');

const { ApolloServer } = require('apollo-server');

const typeDefs = fs.readFileSync('./graphql/schema.graphql', 'utf8')

const books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        id: 2,
        title: 'Harry Potter',
        author: 'Jek'
    }
]

const resolvers = {
    Query: {
        books: () => books
    }
}

const app = new ApolloServer({ typeDefs, resolvers })

app.listen(1234).then(( { url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
