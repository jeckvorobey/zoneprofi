import { SET_TAGS } from "./mutation-types";

export default {
  /**
   *
   * @param { TagsState } state
   * @param { array } tags
   */
  [SET_TAGS](state, { tags }) {
    state.tags = tags;
  },
};
