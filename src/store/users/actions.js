import axios from "axios";
import { SET_USERS } from "./mutation-types";

/**
 *
 * @param { function } commit
 * @param { string } key
 */
export async function loadUserList({ commit }, key) {
  await axios({
    method: "get",
    url: "https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/users/getall",
    data: JSON.stringify({
      key: key,
    }),
  })
    .then((r) => {
      if (r.data.code === "200") {
        commit(SET_USERS, r.data.res);
      }
    })
    .catch((error) => console.log(error));
}
