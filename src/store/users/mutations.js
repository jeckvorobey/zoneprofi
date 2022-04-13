import { SET_USERS } from './mutation-types'

export default {
    /**
    *
    * @param { UsersState } state
    * @param { object } users
    */
  [SET_USERS] (state, { users }) {
    state.users = users
  }
}
