# GoodData TypeScript Style Guide

TypeScript coding style guide similar to [GoodData JavaScript Style Guide](https://github.com/gooddata/gdc-js-style/tree/master/javascript)

## Install
`yarn add --dev @gooddata/tslint-config`

## Usage
Edit your `tslint.json`
```json
{
  "extends": "@gooddata/tslint-config"
}
```
 
## Development

Install [Node.js](http://nodejs.org) (node 12.16.1, npm v6.13.4) and [Yarn](https://classic.yarnpkg.com) 1.22.4.

Install dependencies:
```
yarn install --frozen-lockfile
```

## Release

Package publishing is done via Jenkins Job:

https://checklist.intgdc.com/job/client-libs/job/gdc-js-style-typescript-release/
