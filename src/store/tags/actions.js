import { SET_TAGS } from "./mutation-types";
import axios from "axios";

/**
 *
 * @param { function } commit
 */
export async function loadTags({ commit }) {
  await axios({
    method: "get",
    url: `https://api.0zo.ru/${process.env.VUE_APP_APIKEY}/tags/getall`,
  })
    .then((r) => {
      if (r.data.code === "200") {
        commit(SET_TAGS, r.data.res);
      }
    })
    .catch((error) => console.log(error));
}
