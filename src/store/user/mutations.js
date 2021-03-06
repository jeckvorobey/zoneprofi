import { SET_USER, REMOVE_USER } from "./mutation-types";

export default {
  /**
   *
   * @param {Object} state
   * @param {Object} user
   */
  [SET_USER](state, user) {
    state.user = user;
  },
  [REMOVE_USER](state) {
    state.user = null;
  },
};
