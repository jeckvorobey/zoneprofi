import axios from 'axios'
import {REMOVE_USER, SET_USER} from './mutation-types'

/**
 * @param { function } commit
 * @param { Object } authData
 */
export async function AUTH_USER ({commit}, authData) {
  await axios({
    method: 'post',
    url: 'https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/avt/avt',
    data: JSON.stringify(authData.credentials)
  })
    .then(r => {
      if (r.status === 200) {
        // console.log(r.data.res)
        if (r.data.res.hasOwnProperty('avtkey')) {
          commit(SET_USER, r.data.res)
          if (authData.checked) {
            localStorage.setItem('avtkey', r.data.res.avtkey)
          }
          // this.$router.push('/dashboard')
        } else {
          console.log('Not auth messages: ' + r.data.res)
        }
      }
    })
    .catch(error => console.log(error))
}

/**
 * @param { function } commit
 * @param { string } avtkey
 */
export async function AUTH_KEY_USER ({commit}, avtkey) {
  await axios({
    method: 'post',
    url: 'https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/avt/avtkey',
    data: JSON.stringify({
      'key': avtkey
    })
  })
    .then(r => {
      if (r.status === 200 && r.data.code === '200') {
        if (r.data.res.hasOwnProperty('avtkey')) {
          commit(SET_USER, r.data.res)
        } else {
          console.log('Not auth messages: ' + r.data.res)
        }
      } else {
        console.log(`Code: ${r.data.code} ERROR: ${r.data.status}`)
      }
    }).catch(error => console.log(error))
}

/**
 * @param { function } commit
 */
export function LOGOUT ({commit}) {
  commit(REMOVE_USER)
}
