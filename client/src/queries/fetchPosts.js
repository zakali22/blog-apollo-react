import gql from "graphql-tag"

export default gql`
  query fetchPosts {
    posts {
      _id
      title
      createdAt
      body
      createdBy {
        name
        username
      }
    }
  }
`