export const View = state => [
  LightSwitch(state),

  h1('@magic-modules/light-switch'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' LightSwitch component. It provides a color theme switch button.',
  ]),

  GitBadges('magic-modules/light-switch'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install @magic-modules/light-switch'),

  h2({ id: 'usage' }, 'usage:'),
  p('in a page or module View'),
  Pre(`
export const View = state => [
  div('using the LightSwitch module'),
  LightSwitch(state),
]`),

  p('thats it, your magic app will now know how to display the LightSwitch button.'),

  h2({ id: 'positioning' }, 'positioning'),
  p(
    'to further customize the position or other css, just use the .LightSwitch class in your theme css.',
  ),

  Pre(`
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
`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/light-switch/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
