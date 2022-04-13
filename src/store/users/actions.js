import { SET_USERS } from './mutation-types'

/**
*
* @param { function } commit
* @param { object } users
*/
export function setUsers ({ commit }, { users }) {
  commit(SET_USERS, { users })
}
