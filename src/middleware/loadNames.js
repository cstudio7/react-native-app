import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS
} from '../constants/ActionTypes';
import { femaleNames, maleNames } from '../../data';

const formatNames = names => {
  const sortedKeys = Object.keys(names).sort();
  return sortedKeys.map(key => {
    const { meaning, origin } = names[key];
    return { name: key, meaning, origin };
  });
};

const loadNames = () => ({
  female: formatNames(femaleNames),
  male: formatNames(maleNames)
});

export default _ => next => action => {
  if (action.type !== FETCH_NAMES_REQUEST) {
    return next(action);
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    return finalAction;
  };

  next(actionWith({ type: FETCH_NAMES_REQUEST }));

  next(
    actionWith({
      response: loadNames(),
      type: FETCH_NAMES_SUCCESS
    })
  );
};
