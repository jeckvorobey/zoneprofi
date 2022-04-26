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
      'Content-Type': 'text/html; charset=UTF-8',
      'Akey': '2ac55a9e-c87b-5ce2-4081-7a5715984865'
    }
  })
    .then(r => {
      console.log(r)
      // commit(SET_USERS, { users })
    })
}
