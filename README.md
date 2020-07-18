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
[travis-image]: https://img.shields.io/travis/com/magic-modules/light-switch/master
[travis-url]: https://travis-ci.com/magic-modules/light-switch
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

#### changelog

##### 0.0.1
first commit

##### 0.0.2
use @magic npm packages instead of github for installs

##### 0.0.3
default colors are adapted for @magic-themes/docs

##### 0.0.4
* require node 13.5.0
* use svg graphic instead of a dot

##### 0.0.5
* update svg

##### 0.0.6 
bump required node version to 14.2.0

##### 0.0.7
add icon css class to svg

##### 0.0.8 
set default height and width in svg only

##### 0.0.9 - unreleased
...
