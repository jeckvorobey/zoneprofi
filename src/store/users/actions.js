import axios from 'axios'
import {SET_USERS} from './mutation-types'

/**
 *
 * @param { function } commit
 */
export async function GET_USERS_LIST ({commit}) {
  // ?limit=50&start=10
  await axios({
    method: 'get',
    url: 'https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/users/getall/',
    headers: {
      'Accept': 'application/json',
      'Akey': '0a5cf475-665b-6c56-86e2-d433fcd76d35'
    },
    data: {}
  })
    .then(r => {
      let d = JSON.stringify(r)
      console.log(d)
      commit(SET_USERS, r)
    })
}
