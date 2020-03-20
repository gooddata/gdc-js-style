# GoodData JavaScript Style Guide

This package is build based on https://eslint.org/docs/developer-guide/shareable-configs. Provides common linting rules for gooddata TS/JS projects.

Linter is using typescript-eslint parser to check typescript and javascript sources

More details: https://typescript-eslint.io, [typescript-eslint Roadmap](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)

## Install
```
yarn add @gooddata/eslint-config --dev
```

Add required eslint, parser & plugins

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-header eslint-plugin-import eslint-plugin-jest --dev
```
                               
## Usage

Add or edit in project `.eslintrc.js` file.

```javascript
module.exports = {
    root: true,
    extends: ["@gooddata"],
    rules: {
        // Custom rules
    }
};
```  

## Development

Install [Node.js](http://nodejs.org) (node 12.16.1, npm v6.13.4) and [Yarn](https://classic.yarnpkg.com) 1.22.4.

Install dependencies:
```
yarn install --frozen-lockfile
```

## Release

Package publishing is done via Jenkins Job:

https://checklist.intgdc.com/job/client-libs/job/gdc-js-style-javascript-release/

