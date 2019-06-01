## @magic-modules/light-switch
this is the [@magic-modules](https://github.com/magic-modules/)
LightSwitch component. It provides a dynamic dark/light mode switch button

[html docs](https://magic-modules.github.io/light-switch/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/light-switch.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/light-switch
[travis-image]: https://api.travis-ci.org/magic-modules/light-switch.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/light-switch
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/light-switch/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/light-switch/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/light-switch/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/light-switch
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/light-switch.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/light-switch.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/light-switch/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/light-switch

#### install:
```bash
npm install --save-exact @magic-modules/light-switch
```

#### usage:
```javascript
// in any component View
export const View = state => [LightSwitch(state)]
```

thats it, your magic app now knows displays a LightSwitch in the top right.

#### positioning
to position LightSwitch in another corner,
simply pass `left` and/or `bottom` as part of the props:
```javascript
export const View = state => [LightSwitch({ ...state, left: true, bottom: true })]
```