import gql from "graphql-tag"

export default gql`
    mutation addPost($title: String, $body: String, $createdBy: UserInput){
        addPost(post: {title: $title, body: $body, createdBy: $createdBy}){
            _id
            title
            body
            createdBy {
            name
            }
        }
    }
`