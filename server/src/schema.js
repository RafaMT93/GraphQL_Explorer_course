const { gql } = require('apollo-server');

const typeDefs = gql`
    "Track group"
    type Track {
        id: ID
        title: String!
        author: Author!
        thumbnail: String!
        length: Int @deprecated(reason: "Use durationInSeconds")
        durationInSeconds: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        "Complete Track of Array Modules"
        modules: [Module!]!
    }
    
    "Author group"
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    "Module"
    type Module {
        id: ID!
        title: String!
        length: Int @deprecated(reason: "Use durationInSeconds")
        durationInSeconds: Int
    }

    "Response track mutation"
    type incrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    type Query {
        "Array of track for"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        incrementTrackViews(id: ID!): incrementTrackViewsResponse!
    }
`;

module.exports = typeDefs;