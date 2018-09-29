import { Amplitude } from 'expo';
import amplitude from './amplitude';

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

it('logs an action type', () => {
  const spy = jest.spyOn(Amplitude, 'logEvent');
  const { invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(spy).toHaveBeenCalledWith('TEST');
});
