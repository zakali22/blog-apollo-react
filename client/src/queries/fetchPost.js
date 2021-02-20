import gql from "graphql-tag"

export default gql`
    query fetchPost($postId: ID!){
        post(_id: $postId) {
            _id
            title
            createdAt
            body
            createdBy {
                name
                username
            }
        }

        isEditMode @client
    }
`