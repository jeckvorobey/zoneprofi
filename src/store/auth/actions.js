import { SET_TOKEN } from './mutation-types'

/**
*
* @param { function } commit
* @param { string } token
*/
export function setToken ({ commit }, { token }) {
  commit(SET_TOKEN, { token })
}
