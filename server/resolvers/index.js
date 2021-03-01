const {gql} = require("apollo-server-express")
const {GraphQLScalarType} = require("graphql")
const {Kind} = require("graphql/language")
const Post = require("../models/PostSchema")
const User = require("../models/UserSchema")

const path = require("path")
const {createWriteStream} = require("fs")

const resolvers = {
    Query: {
        post: async (obj, args, context) => {
            return await Post.findById(args._id)
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
                const files = [];
                const {createReadStream, filename} = await post.image[0];

                console.log(createReadStream, filename)

                await new Promise(res => (
                    createReadStream()
                        .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
                        .on("close", res)
                ))

                files.push(filename)

                await Post.create({
                    ...post,
                    image: files,
                    created_by: post.createdBy._id
                })
    
                return await Post.find({})
            } catch(e){
                console.log(e)
            }
        },
        addUser: async (obj, {user}, context) => {
            try {   
                const userExists = await User.find({username: user.username})
                console.log(userExists)

                if(userExists.length === 0){
                    await User.create({
                        ...user
                    })
                    return await User.find({})
                } 

                throw new Error("User already exists")
            } catch(e){
                return e
            }
        },
        addUserPost: async (obj, args, context) => {    
            try {
                const user = await User.findById(args._id)
                const userPostExists = user.posts.find(post => {
                    const postIdArgs = JSON.parse(JSON.stringify(args.postId))
                    const stringifiedPost = String(post)

                    return stringifiedPost === postIdArgs._id
                })

                if(!userPostExists){
                    const posts = await Post.find({})
                    console.log(posts)
                    const postAlreadyHasUser = posts.find(post => {
                        const postIdArgs = JSON.parse(JSON.stringify(args.postId))
                        const stringifiedPost = String(post._id)

                        return stringifiedPost === postIdArgs._id
                    })

                    if(!postAlreadyHasUser){
                        const userPosts = [...user.posts, args.postId]

                        await User.findByIdAndUpdate(args._id, {posts: userPosts}, {new: true})
            
                        return await User.findById(args._id)
                    } 

                    throw new Error("Post already has an associated user")

                }

                throw new Error("User post already exists")
            } catch(e){
                return e
            }

        },
        editUserDetails: async (obj, {_id, user}, context) => {
            await User.findByIdAndUpdate(_id, user, {new: true})

            return await User.findById(_id)
        },
        editPost: async (obj, args, context) => {
            try {
                const post = await Post.findById(args._id)
                console.log(post)

                if(post){
                    if(args.post.createdBy) {
                        await Post.findByIdAndUpdate(args._id, {...args.post, created_by: args.post.createdBy}, {new: true})
                    } else {
                        await Post.findByIdAndUpdate(args._id, args.post, {new: true})
                    }

                    return await Post.findById(args._id)
                }

                throw new Error("Post doesn't exist")
            } catch(e){
                return e
            }
        },
        deletePost: async (obj, args, context) => {
            try {
                const post = await Post.findById(args._id)

                if(post){
                    await Post.findByIdAndDelete(args._id)

                    return await Post.find({})
                }

                throw new Error("Post doesn't exist")
            } catch(e){
                return e
            }
        },
        deleteUser: async (obj, args, context) => {
            try {
                const user = await User.findById(args._id)

                if(user){
                    await User.findByIdAndDelete(args._id)

                    return await User.find({})
                }

                throw new Error("User doesn't exist")
            } catch(e){
                return e
            }
        },
        deleteUserPost: async (obj, args, context) => {
            const user = await User.findById(args._id)
            const newUserPosts = user.posts.filter(post => {
                const postIdArgs = JSON.parse(JSON.stringify(args.postId))
                const stringifiedPost = String(post)

                return stringifiedPost !== postIdArgs._id
            })
            
            await User.findByIdAndUpdate(args._id, {posts: newUserPosts}, {new: true})
            
            return await User.findById(args._id)
        },
        // uploadFile: async (obj, args, context) => {
        //     try {
        //         const files = []
        //         const post = await Post.findById(args._id)
        //         if(post){
        //             const {createReadStream, filename} = await args.post.file;

        //             await new Promise(res => (
        //                 createReadStream()
        //                     .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
        //                     .on("close", res)
        //             ))

        //             files.push(filename)

        //             return true
        //         } else {
        //             throw new Error("Post doesn't exist")
        //         }
        //     } catch(e){
        //         console.log(e)
        //         return e
        //     }
        // }
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

    Upload: new GraphQLScalarType({
        name: 'Upload',
        description: 'The `Upload` scalar type represents a file upload.',
        parseValue(value) {
          return value
        },
        serialize(value) {
          return value
        },
        parseLiteral(ast) {
          throw new Error('‘Upload’ scalar literal unsupported.')
        },
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
        updatedAt: async (obj, args, context) => {
            try {
                // console.log(obj)
                return obj.updated_at
            } catch(e){
                console.log(e)
            }
        },
        createdBy: async (obj, args, context) => {
            try {
                const userId = obj.created_by;
                return await User.findById(userId)
            } catch(e){
                console.log(e)
            }
        },
    },

    User: {
        posts: async (obj, args, context) => {
            let posts = []

            for(let post in obj.posts){
                const postFetched = await Post.findById(obj.posts[post])
                posts.push(postFetched)
            }

            return posts
        },
        createdAt: async (obj, args, context) => {
            try {
                // console.log(obj)
                return obj.created_at
            } catch(e){
                console.log(e)
            }
        },
        updatedAt: async (obj, args, context) => {
            try {
                // console.log(obj)
                return obj.updated_at
            } catch(e){
                console.log(e)
            }
        },
    }
}

module.exports = resolvers