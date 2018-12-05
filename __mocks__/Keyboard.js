import { Keyboard } from 'react-native';

const Keyboard = jest.genMockFromModule('Keyboard');

Keyboard.dismiss = jest.fn();

module.exports = Keyboard;
