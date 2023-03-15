export const typePolicies = {
    Query: {
      fields: {
        all_book: {
            //Don't cache separate results based on any of this field's arguments.
            keyArgs: false
        },
      },
    },
    AllBook: {
      fields: {
        items: {
          // Merge existing results with incoming ones
          merge(existing = [], incoming) {
            return existing ? [...existing, ...incoming] : incoming
          },
        },
      },
    },
  }
  