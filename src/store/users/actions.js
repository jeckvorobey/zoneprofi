import axios from 'axios'

/**
*
* @param { function } commit
*/
export async function GET_USERS_LIST ({ commit }) {
  // ?limit=50&start=10
  await axios({
    method: 'get',
    url: 'https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/users/getall/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      'key': '0a5cf475-665b-6c56-86e2-d433fcd76d35'
    }
  })
    .then(r => {
      console.log(r)
      // commit(SET_USERS, { users })
    })
}
