import { SET_TAGS, SET_CATEGORY } from "./mutation-types";

export default {
  /**
   *
   * @param { Array } state
   * @param { Array } tags
   */
  [SET_TAGS](state, tags) {
    state.tags = tags;
  },
  /**
   *
   * @param { Array } state
   * @param { Array } category
   */
  [SET_CATEGORY](state, category) {
    state.category = category;
  },
};
