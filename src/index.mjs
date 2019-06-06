export const View = (state = {}) => {
  CHECK_PROPS(state, propTypes, 'LightSwitch')

  return button({
    class: 'LightSwitch',
    onclick: actions.changeTheme,
  })
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
  backgroundColor: vars.textColor || '#EEEEEE',
  border: '0 none',
  borderRadius: '100%',
  height: '2em',
  width: '2em',

  '.light&&': {
    backgroundColor: vars.textColorLight || '#000',
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
