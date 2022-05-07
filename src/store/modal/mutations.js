import {SET_INVISIBLE, TOGGLE_INVISIBLE} from './mutation-types'

export default {
  /**
   *
   * @param { ModalState } state
   * @param { boolean } inVisible
   */
  [SET_INVISIBLE] (state, inVisible) {
    state.inVisible = inVisible
  },

  /**
   *
   * @param { ModalState } state
   */
  [TOGGLE_INVISIBLE] (state) {
    state.inVisible = !state.inVisible
  }
}
