import gql from 'graphql-tag'

export default apolloClient => (
  apolloClient.query({
    query: gql`
      {
        user {
          id
        }
      }
    `
  }).then(({ data }) => {
    return { loggedInUser: data }
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)