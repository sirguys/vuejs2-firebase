import firebase from 'firebase'
import Auth from './auth'

const list = (callback) => {
  firebase.database().ref('tweet').on('value', callback)
}

const post = (content) => {
  return firebase.database().ref('tweet').push({
    content,
    owner: Auth.getCurrentUser().uid,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post
}
