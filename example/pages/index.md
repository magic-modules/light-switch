# ${state.title},

this is the
[@magic-modules](https://github.com/magic-modules)
LightSwitch component. It provides a color theme switch button.

<GitBadges>magic-modules/light-switch</GitBadges>

## installation

`npm install @magic-modules/light-switch`

## usage

hoist in src/config.mjs

```
// /src/config.mjs
export default {
  HOIST: ['LanguageSwitch'],
}
```

thats it, your magic app will now know to display the LightSwitch button.

## positioning

to further customize the position or other css, just use the .LightSwitch class in your theme css.

```
// /assets/theme/yourtheme/index.mjs
export default {
  // ...other styles

  // top right
  '.LightSwitch': {
    left: 'auto',
    position: 'fixed',
    right: '0.5em',
    top: '0.5em',
  },

  // bottom right
  '.LightSwitch': {
    bottom: '0.5em',
    left: 'auto',
    position: 'fixed',
    right: '0.5em',
    top: 'auto',
  },

  // top left
  '.LightSwitch': {
    left: '0.5em',
    position: 'fixed',
    top: '0.5em',
  },

  // bottom left
  '.LightSwitch': {
    bottom: '0.5em',
    left: '0.5em',
    position: 'fixed',
    top: 'auto',
  },
}
```

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/light-switch/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
