const {gql} = require("apollo-server")
const {GraphQLScalarType} = require("graphql")
const {Kind} = require("graphql/language")
const Post = require("../models/PostSchema")
const User = require("../models/UserSchema")

const resolvers = {
    Query: {
        post: async (obj, args, context) => {
            return await Post.findById({_id: args._id})
        },
        posts: async (obj, args, context) => {
            return await Post.find({})
        },
        users: async (obj, args, context) => {
            return await User.find({})
        }
    },

    Mutation: {
        addPost: async (obj, {post}, context) => {
            try {
                console.log(post.createdBy)
                await Post.create({
                    ...post,
                    created_by: post.createdBy._id
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
        },
        editUserDetails: async (obj, {_id, user}, context) => {
            await User.findByIdAndUpdate(_id, user, {new: true})

            return await User.findById({_id})
        },
        deleteUserPost: async (obj, args, context) => {
            const userPosts = await User.findById({_id: args._id})
            const newUserPosts = userPosts.posts.filter(post => {
                const postIdArgs = JSON.parse(JSON.stringify(args.postId))
                const stringifiedPost = String(post)

                return stringifiedPost !== postIdArgs._id
            })
            
            await User.findByIdAndUpdate(args._id, {posts: newUserPosts}, {new: true})
            
            return await User.findById({_id: args._id})
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
                // console.log(obj)
                return obj.created_at
            } catch(e){
                console.log(e)
            }
        },
        createdBy: async (obj, args, context) => {
            try {
                const userId = obj.created_by;
                return await User.findById({_id: userId})
            } catch(e){
                console.log(e)
            }
        },
    },

    User: {
        posts: async (obj, args, context) => {
            let posts = []

            for(let post in obj.posts){
                const postFetched = await Post.findById({_id: obj.posts[post]})
                posts.push(postFetched)
            }

            return posts
        }
    }
}

module.exports = resolvers