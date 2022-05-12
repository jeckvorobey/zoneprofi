import {SET_INVISIBLE, TOGGLE_INVISIBLE} from './mutation-types'

/**
 *
 * @param { function } commit
 * @param { boolean } inVisible
 */
export function setInVisible ({commit}, inVisible) {
  commit(SET_INVISIBLE, inVisible)
}

/**
 *
 * @param { function } commit
 */
export function toggleInVisible ({commit}) {
  commit(TOGGLE_INVISIBLE)
}
