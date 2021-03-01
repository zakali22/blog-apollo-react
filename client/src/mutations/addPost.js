import gql from "graphql-tag"

export default gql`
    mutation addPost($title: String, $body: String, $image: Upload, $createdBy: UserInput){
        addPost(post: {title: $title, body: $body, image: $image, createdBy: $createdBy}){
            _id
            title
            body
            image
            createdBy {
             name
            }
        }
    }
`