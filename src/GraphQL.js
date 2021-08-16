
import {
    ApolloClient,
    InMemoryCache,
    gql,
    HttpLink
  } from "@apollo/client";

export const GET_CHARACTERS = gql`
query{
    allPeople{
        people{
          name
          birthYear
          eyeColor
          gender
          hairColor
          eyeColor
          height
          mass
          homeworld{
            name
          }
          species{
            name
          }
        }
      }
  }
`;

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
    }),
    cache: new InMemoryCache(),
  });