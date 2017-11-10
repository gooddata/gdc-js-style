# GoodData TypeScript Style Guide

TypeScript coding style guide similar to [GoodData JavaScript Style Guide](https://github.com/gooddata/gdc-js-style/tree/master/javascript)

## Install
`yarn add --dev tslint-config-gooddata`

## Usage
Edit your `tslint.json`
```json
{
  "extends": "tslint-config-gooddata"
}
```

## Release
```bash
git checkout master && git pull upstream master
npm version [major|minor|patch]
git commit -am "TS - Release v[your_version]"
npm publish
git push upstream master
```
