import gql from 'graphql-tag';

export const femaleNamesQuery = gql`
  {
    femaleNames {
      id
      name
    }
  }
`;

export const maleNamesQuery = gql`
  {
    maleNames {
      id
      name
    }
  }
`;
