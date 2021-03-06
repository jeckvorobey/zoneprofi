import { SET_TAGS, SET_CATEGORY } from "./mutation-types";
import axios from "axios";
/**
 *
 * @param { function } commit
 */
export async function loadTags(commit) {
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
/**
 *
 * @param { function } commit
 * @param { String } id
 */
export async function loadTagsSubcategoryId({ commit }, id) {
  await axios({
    method: "get",
    url: `https://api.0zo.ru/${process.env.VUE_APP_APIKEY}/tags/tags/${id}`,
  })
    .then((r) => {
      if (r.data.code === "200") {
        commit(SET_TAGS, r.data.res);
      }
    })
    .catch((error) => console.log(error));
}
/**
 *
 * @param { function } commit
 */
export async function loadCategory({ commit }) {
  await axios({
    method: "get",
    url: `https://api.0zo.ru/${process.env.VUE_APP_APIKEY}/tags/category`,
    body: { id: 1 },
  })
    .then((r) => {
      if (r.data.code === "200") {
        commit(SET_CATEGORY, r.data.res);
      }
    })
    .catch((error) => console.log(error));
}
