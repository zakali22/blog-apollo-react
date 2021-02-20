import gql from "graphql-tag"

export default gql`
    mutation deletePost($id: ID!){
        deletePost(_id: $id){
            title
        }
    }
`