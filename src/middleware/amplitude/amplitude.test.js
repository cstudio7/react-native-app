import { Amplitude } from 'expo';
import amplitude, { necessaryEvents } from './amplitude';

const expectedNecessaryEvents = [
  'names/LISTSCREEN_NAME_FAVORITE',
  'names/FAVSCREEN_NAME_FAVORITE',
  'names/LISTSCREEN_NAME_UNFAVORITE',
  'names/FAVSCREEN_NAME_UNFAVORITE',
  'names/FETCH_NAMES_SUCCESS'
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
  it(`sends ${actionType} event`, () => {
    const spy = jest.spyOn(Amplitude, 'logEvent');
    const { invoke } = create();
    const action = { type: actionType };
    invoke(action);
    expect(spy).toHaveBeenCalledWith(actionType);
  });
});
