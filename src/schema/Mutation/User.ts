//import { Console } from 'console'
import {GraphQLString, GraphQLID, GraphQLBoolean} from 'graphql'
//import { argsToArgsConfig } from 'graphql/type/definition'
//import { resolve } from 'path'
//import { clearScreenDown } from 'readline'
//import { Resolver, Query , Mutation} from "type-graphql"
import {Users} from '../../entities/users'
//import { Update } from '../../entities/updateuser'
//import { resolve } from 'path'
import { user_type } from '../typeDefs/User'

export const Create_user = {
    type: user_type,
    args: {
        ID : {type : GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
        reg: {type: GraphQLString},
    },
    async resolve(_:any, args:any){
        const {ID,name, age, reg} = args  
        const result = await Users.save({
        ID : ID,
        name : name,
        age: age,
        reg : reg
       })
       /*const result = Users.create(args)

       await result.save()*/
       console.log(result)

        return {
            ID : ID,
            name : name,
            age : age,
            reg : reg
        }
    }
}

export const Delete_User = {
    type : GraphQLBoolean,
    args : {
        ID : { type: GraphQLID}
    },
    async resolve( _:any, args : any){
        const ID = args;
        const user = await Users.findOne( {where : { ID }})
        console.log(user)
        if(!user) throw new Error ("User Not Found")
        await user.remove() ;
        return true
    }
}

