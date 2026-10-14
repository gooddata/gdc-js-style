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

Install [Node.js](http://nodejs.org) and [Yarn](https://classic.yarnpkg.com) (for versions, see [config](docker/.config)).

Install dependencies:

```
yarn install --frozen-lockfile
```

## Release

The release needs to be done via [npm trusted publishing](https://docs.npmjs.com/trusted-publishers). Set it up if needed.
See `mock-js` for the reference implementation and consult the frontend shared credentials guideline.
