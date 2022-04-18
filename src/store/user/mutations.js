import { SET_USER, REMOVE_USER } from './mutation-types'

export default {
    /**
    *
    * @param { UserState } state
    * @param { Object } user
    */
  [SET_USER] (state, user) {
    state.user = user
  },
  [REMOVE_USER] (state) {
    state.user = null
    localStorage.removeItem('avtkey')
  }
}
