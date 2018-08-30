# bn-client

- [Installation and setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
- [Running](#running)
  - [iOS](#ios)
  - [Android](#android)
  - [Debugging](#debugging)
- [Application design](#application-design)

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

## Application design

src/
├── components/
├── constants/
├── containers/
├── modules/
├── navigation/
├── redux/
├── screens/
App.js

**components**

Mainly pure components (no internal state). Only imports npm, 'modules', or 'components'. No importing from 'redux'. Probably quite a few components with props that are callbacks, e.g., onPressPlay, which the containers will provide.

**constants**

This is where we keep our constants like colors. Reducers related constants we keep in 'redux' folder.

**containers**

They glue together UI (components) and data (redux). They might also define a few layout styles.

**modules**

This is where we keep our modules. Examples: error handling logic, image processing and resizing, timers, http client, dom utilities.

**navigation**

Maps routes to screens.

**redux**

All state is managed here, and all means of accessing and modifying state are controlled here. It only imports from 'modules'.
"Action creators" are used to trigger changes to the state (which may initiate app re-renders).

**screens**

Top-level components the router delegates rendering to. They combine thins like 'containers' (like nav bar + profile), analytics.

**App.js**

Glues together things like 'React.render', the router, routes.js, redux store