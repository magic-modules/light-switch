import { is } from '@magic/test'
import * as LightSwitch from '../src/index.mjs'

export default [
  {
    fn: () => LightSwitch.View,
    expect: is.function,
    info: 'expect LightSwitch.View to be a function',
  },
  {
    fn: () => LightSwitch.state,
    expect: is.object,
    info: 'expect LightSwitch.state to be an object',
  },
  {
    fn: () => LightSwitch.state.theme,
    expect: is.string,
    info: 'expect LightSwitch.state.theme to be a string',
  },

  {
    fn: () => LightSwitch.style,
    expect: is.function,
    info: 'expect LightSwitch.style to be a function',
  },
  {
    fn: () => LightSwitch.actions,
    expect: is.object,
    info: 'expect LightSwitch.actions to be an object',
  },

  {
    fn: () => LightSwitch.global,
    expect: is.object,
    info: 'expect LightSwitch.global to be an object',
  },

  {
    fn: () => LightSwitch.global.state.theme,
    expect: true,
    info: 'expect LightSwitch.global.state.theme to be true',
  },
  {
    fn: () => LightSwitch.global.actions.changeTheme,
    expect: true,
    info: 'expect LightSwitch.global.actions.changeTheme to be true',
  },
  {
    fn: () => LightSwitch.propTypes.LightSwitch,
    expect: is.array,
    info: 'expect LightSwitch.propTypes.LightSwitch to be an array',
  },
]
