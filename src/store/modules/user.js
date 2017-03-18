import allTypes from '../types'
import { $page } from '@helper'

const {getter, action, mutation} = allTypes.user

/**
 * initial state
 * @user [object]
 *
 */
const state = {
  user: null
}

/**
 * getters
 */
const getters = {
  [getter.user]: state => state.user
}

/**
 * actions
 */
const actions = {
  [action.fetch] ({ commit, state }) {
    return $page.account.getUserInfo().then((user) => {
      commit(mutation.update, {
        user
      })
    })
  }
}

/**
 * mutations
 */
const mutations = {
  [mutation.update] (state, {user}) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
