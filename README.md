# my-react-native-app
Application is available [here](https://play.google.com/store/apps/details?id=dev.baarsjes.babynamespro)

- [Installation and setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
- [Running](#running)
  - [iOS](#ios)
  - [Android](#android)
  - [Debugging](#debugging)
- [Architecture Decision Records](#architecture-decision-records)
- [Application design](#application-design)

## Installation and setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)
- [Install Yarn](https://yarnpkg.com/en/docs/install)
- `yarn global add react-native-cli`

More information on getting started can be found here: https://facebook.github.io/react-native/docs/getting-started.html under the `Building projects with React Native` tab.

#### General

Clone the repository

`git clone git@github.com:artiebits/react-native-app.git`

And install dependencies

`yarn install`

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

## Architecture Decision Records

We will keep a collection of records for "architecturally significant" decisions: those that affect the structure, non-functional characteristics, dependencies, interfaces, or construction techniques.

When making such changes please include a new ADR in your PR.

- Install `adr-tools`: https://github.com/npryce/adr-tools
- To create a new record: `adr new Implement as Unix shell scripts`

To find out more about ADRs have a read of this article: http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

## Application design

```
src/
├── actions/
├── components/
├── constants/
├── containers/
├── middleware/
├── modules/
├── navigation/
├── reducers/
├── screens/
├── store/
App.js
```

**actions**

Functions that create actions aka "action creators" which are used to trigger changes to the state.

**components**

Mainly pure components (no internal state). Only imports npm, 'modules', or 'components'. No importing from 'redux'. Probably quite a few components with props that are callbacks, e.g., onPressPlay, which the containers will provide.

**constants**

This is where we keep our constants like colors. Reducers related constants we keep in 'redux' folder.

**containers**

They glue together UI (components) and data (redux). They might also define a few layout styles.

**middleware**

They provide a third-party extension point between dispatching an action, and the moment it reaches the reducer. We use middlewares for crash reporting and Amplitude. Can be used for talking to an asynchronous API, routing, and more.

**modules**

This is where we keep our modules. Examples: error handling logic, image processing and resizing, timers, http client, dom utilities.

**navigation**

Maps routes to screens.

**reducers**

All state is managed here, and all means of accessing and modifying state are controlled here. It only imports from 'modules'.

**screens**

Top-level components the router delegates rendering to. They combine thins like 'containers' (like nav bar + profile), analytics.

**store**

All the logic related to configuring the store - including importing reducers, middleware, and enhancers.

**App.js**

Glues together things like 'React.render', the router, routes.js, redux store
