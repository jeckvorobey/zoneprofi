import axios from "axios";
import { REMOVE_USER, SET_USER } from "./mutation-types";

/**
 * @param { function } commit
 * @param { Object } authData
 */
export async function authUser({ commit }, authData) {
  await axios({
    method: "post",
    url: `https://api.0zo.ru/${process.env.VUE_APP_APIKEY}/avt/avt`,
    data: JSON.stringify(authData.credentials),
  })
    .then((r) => {
      //  console.log('Action AUTH_USER:\n' + JSON.stringify(r))
      if (r.status === 200) {
        // eslint-disable-next-line no-prototype-builtins
        if (r.data.res.hasOwnProperty("avtkey")) {
          commit(SET_USER, r.data.res);
          if (authData.checked) {
            localStorage.setItem("avtkey", r.data.res.avtkey);
          }
        } else {
          console.log("Not auth messages: " + r.data.res);
        }
      }
    })
    .catch((error) => console.log(error));
}

/**
 * @param { function } commit
 * @param { string } avtkey
 */
export async function authKeyUser({ commit }, avtkey) {
  // try {
  //   const data = (
  //     await this.$api.auth.authKey({
  //       key: avtkey,
  //     })
  //   ).data;
  //   console.log(`tast DATA ${data}`);
  //   commit(SET_USER, data);
  // } catch (e) {
  //   console.log(`!!! auth !!! ${e}`);
  // }

  await axios({
    method: "post",
    url: `https://api.0zo.ru/${process.env.VUE_APP_APIKEY}/avt/avtkey`,
    data: JSON.stringify({
      key: avtkey,
    }),
  })
    .then((r) => {
      //console.log("USER (Action AUTH_KEY_USER) >>> 0\n" + JSON.stringify(r));
      if (r.status === 200 && r.data.code === "200") {
        // eslint-disable-next-line no-prototype-builtins
        if (r.data.res.hasOwnProperty("avtkey")) {
          commit(SET_USER, r.data.res);
        } else {
          console.log("Not auth messages: " + r.data.res);
        }
      } else {
        console.log(`Code: ${r.data.code} ERROR: ${r.data.status}`);
      }
    })
    .catch((error) => console.log("ERROR Action AUTH_KEY_USER: " + error.message));
}

/**
 * @param { function } commit
 */
export function logAut({ commit }) {
  commit(REMOVE_USER);
  localStorage.removeItem("avtkey");
}
