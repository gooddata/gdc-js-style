# GoodData JavaScript Style Guide

## Install
`yarn add --dev eslint-config-gooddata`

## Info
This package includes eslint, customized airbnb rules for JS & React, babel-eslint and some eslint plugins.

## Usage
Edit your `.eslintrc`
```json
{
  "extends": ["gooddata"]
}
```

## Release
```bash
git checkout master && git pull upstream master
npm version [major|minor|patch]
git commit -am "JS - Release v[your_version]"
npm publish
git push upstream master
```
