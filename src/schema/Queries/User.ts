import { Console } from "console";
import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Users } from '../../entities/users'
import { user_type } from "../typeDefs/User";
import {Update} from "../../entities/updateuser"
 
export const Get_ALL_Users = {
    type : new GraphQLList (user_type),
    async resolve(){
        const result = await Users.find()
        return result
    }
}

export const Get_user = {
    type : user_type,
    args : {
        ID : {type : GraphQLID}
    },
    async resolve( _ :any, args : any ){
        const result = await Users.findOne( {where : args})
        return result
        //console.log(result)
    }
}

