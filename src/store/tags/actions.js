import { SET_TAGS } from "./mutation-types";
import axios from "axios";

/**
 *
 * @param { function } commit
 */
export async function loadTags({ commit }) {
  const res = await axios({
    method: "get",
    url: "https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/tags/getall",
  });
  commit(SET_TAGS, { res });
}
