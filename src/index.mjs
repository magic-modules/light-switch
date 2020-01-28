export const View = (state = {}) => {
  CHECK_PROPS(state, propTypes, 'LightSwitch')

  return button(
    {
      class: 'LightSwitch',
      onclick: actions.changeTheme,
    },
    svg({ viewBox: '0 0 390 512' }, [
      path({
        d: `
M 176 78
c -53 0 -96 43 -96 96 4 24 31 17 32 0 0 -35 29 -64 64 -64 24 -4 17 -31 0 -32
z
M 176 0
C 74 0 0 83 0 176
c 9 91 79 118 95 204
h 45
c -11 -86 -92 -138 -95 -204 0 -74 63 -131 131 -131
s 131 57 131 131
c -3 66 -84 118 -95 204
h 45
c 16 -86 86 -113 95 -204
C 352 83 278 0 176 0
z
M 95 400
c 2 68 20 48 40 60
h 82
c 20 -12 38 8 40 -60
z
  `,
      }),
    ]),
  )
}

export const state = {
  theme: 'dark',
}

export const actions = {
  changeTheme: state => ({
    ...state,
    pageClass: {
      ...state.pageClass,
      light: state.theme === 'dark',
    },
    theme: state.theme === 'dark' ? 'light' : 'dark',
  }),
}

export const style = (vars = {}) => ({
  background: 'none',
  border: '0 none',
  height: '2em',
  width: '2em',
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
  fill: vars.colors.gray[500],

  '&:hover': {
    background: 'none',
    fill: vars.colors.gray[700],
  },
})

export const global = {
  state: {
    theme: true,
  },
  actions: {
    changeTheme: true,
  },
}

export const propTypes = {
  LightSwitch: [
    { key: 'theme', type: 'string', required: true },
    { key: 'bottom', type: 'boolean' },
    { key: 'left', type: 'boolean' },
  ],
}
