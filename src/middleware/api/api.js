import { CALL_API } from '../../constants/Api';
import femaleNames from '../../../data/femaleNames';
import maleNames from '../../../data/maleNames';

const namesObj = {
  female: femaleNames,
  male: maleNames
};

const callApi = gender => {
  const sortedNames = Object.keys(namesObj[gender]).sort();

  const names = sortedNames.map(name => {
    const { meaning, origin } = namesObj[gender][name];
    return { name, meaning, origin };
  });

  return new Promise(resolve => {
    resolve({
      [gender === 'female' ? 'femaleNames' : 'maleNames']: names
    });
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

  let { gender } = callAPI;

  return callApi(gender).then(
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
