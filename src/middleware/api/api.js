import config from '../../../config';
import { createApolloFetch } from 'apollo-fetch';
import { CALL_API } from '../../constants/Api';

const fetch = createApolloFetch({
  uri: config.apiRoot
});

const callApi = query => {
  return fetch({
    query
  }).then(response => {
    const { data, errors } = response;
    if (errors) {
      return Promise.reject(errors);
    }
    return data;
  });
};

export default _ => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const { types } = callAPI;

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  let { query } = callAPI;

  return callApi(query).then(
    response =>
      next(
        actionWith({
          response,
          type: successType
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        })
      )
  );
};
