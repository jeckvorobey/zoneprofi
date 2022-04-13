import axios from 'axios'
import { SET_USER } from './mutation-types'
import routes from '../../routes'

/**
 * @param { function } commit
 * @param { Object } authData
 */
export function AUTH_USER ({ commit }, authData) {
  axios({
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
            window.localStorage.setItem('avtkey', r.data.res.avtkey)
          }
          routes.push('/dashboard')
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
export function AUTH_KEY_USER ({ commit }, avtkey) {
  axios({
    method: 'post',
    url: 'https://api.zone.pro/key1781232884:AAEdjLso8u9maYpfRN1dR8CJPfI6QkXihao/avt/avt',
    data: JSON.stringify({
      'key': avtkey
    })
  })
    .then(r => {
      if (r.status === 200) {
        if (r.data.res.hasOwnProperty('avtkey')) {
          commit(SET_USER, r.data.res)
          console.log('auth success')
        } else {
          console.log('Not auth messages: ' + r.data.res)
        }
      }
    })
    .catch(error => console.log(error))
}
