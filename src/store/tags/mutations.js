import { SET_TAGS } from "./mutation-types";

export default {
  /**
   *
   * @param {Object} state
   * @param { Object } tags
   */
  [SET_TAGS](state, tags) {
    console.log(`mutation tags ${tags}`);
    state.tags = tags;
  },
};
