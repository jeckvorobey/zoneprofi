import { SET_TAGS } from "./mutation-types";

export default {
  /**
   *
   * @param { Array } state
   * @param { Array } tags
   */
  [SET_TAGS](state, tags) {
    state.tags = tags;
  },
};
