import { GraphQLID, GraphQLObjectType, GraphQLScalarType, GraphQLString } from 'graphql'

export const user_type = new GraphQLObjectType({
    name : 'User',
    fields : {
        ID : { type : GraphQLID},
        name : { type : GraphQLString},
        age : { type : GraphQLString},
        reg : { type : GraphQLString }
    }
})