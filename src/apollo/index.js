import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client'

// setup Apollo Client
export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export const GET_DATA = gql`
  query allTransactions {
    firstDate: allTransactions(filter: { date: "2022-07-01" }) {
      id
      name
      date
      status
      type
      amount
      currency
    }

    secondDate: allTransactions(filter: { date: "2022-06-12" }) {
      id
      name
      date
      status
      type
      amount
      currency
    }
    thirdDate: allTransactions(filter: { date: "2022-04-30" }) {
      id
      name
      date
      status
      type
      amount
      currency
    }
    fourthDate: allTransactions(filter: { date: "2022-03-15" }) {
      id
      name
      date
      status
      type
      amount
      currency
    }
    fifthDate: allTransactions(filter: { date: "2021-07-14" }) {
      id
      name
      date
      status
      type
      amount
      currency
    }
  }
`;
