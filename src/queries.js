import { gql } from '@apollo/client'

export const HEADER = gql`
  query {
    all_header {
      items {
        title
        home_link {
          href
        }
      }
    }
  }
`
export const ALL_BOOKS = gql`
  query {
    all_home {
      items {
        books_list {
          ... on HomeBooksListBook {
            __typename
            book {
              author
              number_of_pages
              short_description
              title
              imageConnection {
                edges {
                  node {
                    url
                  }
                }
              }
              link {
                href
                title
              }
            }
          }
        }
      }
    }
  }
`