const ApolloFetch = jest.genMockFromModule('apollo-fetch');

const createApolloFetch = () => {
  const fetch = () => {
    return new Promise(resolve => {
      resolve({ data: 'foo', errors: null });
    });
  };
  return fetch;
};

ApolloFetch.createApolloFetch = createApolloFetch;

module.exports = ApolloFetch;
