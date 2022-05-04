import { SET_USERS } from './mutation-types'

export default {
    /**
    *
    * @param {Object} state
    * @param { Array } users
    */
  [SET_USERS] (state, users) {
    state.users = users
  }
}
