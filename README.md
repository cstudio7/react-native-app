# bn-client

- [Installation and setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
- [Running](#running)
  - [iOS](#ios)
  - [Android](#android)
  - [Debugging](#debugging)

## Installation and setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)
- [Install Yarn](https://yarnpkg.com/en/docs/install)
- `$ yarn global add react-native-cli`

More information on getting started can be found here: https://facebook.github.io/react-native/docs/getting-started.html under the `Building projects with React Native` tab.

#### General

Clone the repository

`$ git clone git@github.com:artiebits/bn-client.git`

And install dependencies

`$ yarn install`

#### iOS

- Install Xcode from the App Store and accept the license agreement.
- Run Xcode once so that it can install additional components it will need.

## Running

### iOS

- `yarn run-ios [--simulator="iPhone X"]`

### Android

- `yarn run-android`

### Debugging

The recommended tool for debugging is [React Native Debugger](https://github.com/jhen0409/react-native-debugger) which has built in support for Redux Devtools.

To install React Native Debugger:

```bash
brew update && brew cask install react-native-debugger
```

Then to debug:

1.  Close any other debugger windows you have open
1.  Open the App from your Applications folder
1.  Start debugging in the app using one of the following methods:

| Platform    | Command                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| **iOS**     | Press Cmd+R to reload, Cmd+D or shake for dev.                                    |
| **Android** | Double tap R on your keyboard to reload, shake or press menu button for dev menu. |
