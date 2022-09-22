const { gql } = require('apollo-server');

const typeDefs = gql`
    "Track group"
    type Track {
        id: ID
        title: String!
        author: Author!
        thumbnail: String!
        length: Int
        modulesCount: Int
    }
    
    "Author group"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    type Query {
        "Array of track for"
        tracksForHome: [Track!]!
    }
`;

module.exports = typeDefs;