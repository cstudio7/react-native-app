# 3. Set environment variables

Date: 2018-09-01

## Status

Accepted

## Context

We need to set some APIs keys without publishing them on GitHub.

## Decision

We will use [babel-plugin-transform-inline-environment-variables](https://www.npmjs.com/package/babel-plugin-transform-inline-environment-variables).

## Consequences

Another solution might be creating `config.js` and using like `import Config from './config.json'`.
But Expo will pick it up when publishing. You can take a look at a helpful thread about setting environment variables https://github.com/react-community/create-react-native-app/issues/57#issuecomment-298505228.
Both are not solutions to store sensitive data.
