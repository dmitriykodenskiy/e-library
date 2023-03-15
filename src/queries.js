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
  query AllBooks($skip: Int, $limit: Int) {
    all_book(limit: $limit skip: $skip) {
      total
      items {
        author
        number_of_pages
        short_description
        title
        link {
          href
          title
        }
        imageConnection {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    }
  }
`