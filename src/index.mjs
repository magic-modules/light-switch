export const View = (state = {}) => {
  CHECK_PROPS(state, propTypes, 'LightSwitch')

  return button(
    {
      class: 'LightSwitch',
      onclick: actions.changeTheme,
    },

    svg({ class: 'icon', height: 25, width: 25, viewBox: '0 0 352 460' }, [
      path({ d: 'M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z' }),
      path({
        d:
          'M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z',
      }),
      path({
        d:
          'M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z',
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
