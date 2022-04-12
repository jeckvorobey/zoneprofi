import { SET_TOKEN, REMOVE_TOKEN } from './mutation-types'

export default {
    /**
    *
    * @param { AuthState } state
    * @param { string } token
    */
  [SET_TOKEN] (state, { token }) {
    state.token = token
  },
  [REMOVE_TOKEN] (state) {
    state.token = null
  }
}
