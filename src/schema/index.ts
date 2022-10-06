import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {GREETING} from './Queries/Greetings'
import { Get_ALL_Users, Get_user } from './Queries/User'
import {Create_user, Delete_User} from'./Mutation/User'
// Update_User
  
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greeting: GREETING,
        getAllUSER : Get_ALL_Users,
        get_a_user : Get_user
    }
})

const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields : {
        createUser: Create_user,
        deleteUser : Delete_User,
    }
})

/*const Delete = new GraphQLObjectType({
    name : "Deletion",
    fields : {
        delete_User : Delete_User,
    }
})*/


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation : Mutation,
})
