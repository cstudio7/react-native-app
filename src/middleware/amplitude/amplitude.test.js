import { Amplitude } from 'expo';
import amplitude, { necessaryEvents } from './amplitude';

const expectedNecessaryEvents = [
  'LISTSCREEN_NAME_FAVORITE',
  'FAVORITESSCREEN_NAME_FAVORITE',
  'LISTSCREEN_NAME_UNFAVORITE',
  'FAVORITESSCREEN_NAME_UNFAVORITE',
  'FETCH_NAMES_SUCCESS'
];

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => amplitude(store)(next)(action);
  return { store, next, invoke };
};

it('passes through action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

it('filters unnecessary events', () => {
  const spy = jest.spyOn(Amplitude, 'logEvent');
  const { invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(spy).not.toHaveBeenCalled();
});

it('has th list of necessary events', () => {
  expect(necessaryEvents).toEqual(expectedNecessaryEvents);
});

describe.each(necessaryEvents)('Amplitude.logEvent', actionType => {
  const spy = jest.spyOn(Amplitude, 'logEvent');
  const { invoke } = create();

  it(`sends ${actionType} event`, () => {
    const action = { type: actionType };
    invoke(action);
    expect(spy).toHaveBeenCalledWith(actionType);
  });
});
