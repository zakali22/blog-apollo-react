import gql from "graphql-tag"

export default gql`
    mutation editPost($id: ID!, $title: String!, $body: String!){
        editPost(_id: $id, post: {title: $title, body: $body}){
            _id
            title
            body
            createdBy {
            name
            }
        }
    }
`