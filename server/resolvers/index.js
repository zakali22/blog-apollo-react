const {gql} = require("apollo-server")
const {GraphQLScalarType} = require("graphql")
const {Kind} = require("graphql/language")
const Post = require("../models/PostSchema")
const User = require("../models/UserSchema")

const resolvers = {
    Query: {
        post: async (obj, args, context) => {
            return await Post.findById({_id: args.id})
        },
        posts: async (obj, args, context) => {
            return await Post.find({})
        }
    },

    Mutation: {
        addPost: async (obj, {post}, context) => {
            try {
                await Post.create({
                    ...post
                })
    
                return await Post.find({})
            } catch(e){
                console.log(e)
            }
        },
        addUser: async (obj, {user}, context) => {
            try {   
                await User.create({
                    ...user
                })

                return await User.find({})
            } catch(e){
                console.log(e)
            }
        }
    },

    // Type resolvers
    Date: new GraphQLScalarType({
        name: "Date",
        description: "Date scalar type",
        parseValue(value){
            return new Date(value)
        },
        serialize(value){
            return value.getTime()
        },
        parseLiteral(ast){
            if(ast.kind === Kind.INT){
                return new Date(ast.value)
            } 
            return null
        }
    }),

    Post: {
        createdAt: async (obj, args, context) => {
            try {
                return obj.created_at
            } catch(e){
                console.log(e)
            }
        },
        createdBy: async (obj, args, context) => {
            try {
                return obj.created_by
            } catch(e){
                console.log(e)
            }
        },
    }
}

module.exports = resolvers