import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import DB from '@src/firebase'

export default new Vuex.Store({
  state: {
    currentUser: getSavedState('auth.currentUser'),
  },
  mutations: {
    SET_CURRENT_USER(state, newValue) {
      state.currentUser = newValue
      saveState('auth.currentUser', newValue)
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.currentUser
    },
  },
  actions: {
    async logIn({ commit }, userNickname) {
      const findUser = await DB.ref('users')
        .orderByChild('nickname')
        .equalTo(userNickname)
        .once('value')
        .then((snapshot) => snapshot.val())

      // if this nickname is in users objects
      if (findUser) {
        const [findedUserId] = Object.keys(findUser)
        commit('SET_CURRENT_USER', findUser[findedUserId])

        return Promise.resolve()
      } else {
        // if not, create an user for this nickname
        const newUserId = DB.ref('users').push().key
        const newUser = {
          id: newUserId,
          nickname: userNickname,
          allowSendMessage: false,
        }
        return DB.ref('users')
          .child(newUserId)
          .set(newUser)
          .then(() => {
            commit('SET_CURRENT_USER', newUser)
          })
      }
    },
    logOut({ commit }) {
      commit('SET_CURRENT_USER', null)
    },
  },
})

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}
