import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historias: []
  },
  getters: {
  },
  mutations: {
    setHistorias(state, payload) {
      state.historias = payload
    }
  },
  actions: {
    getHistorias({commit}) {
      const historias = []
      db.collection('historias').get()
        .then(res => {
          res.forEach(e => {
            /* console.log(e.id)
            console.log(e.data()) */
            let historia = e.data()
            historia.id = e.id
            historias.push(historia)
          });
          commit('setHistorias', historias)
        })
    }
  },
  modules: {
  }
})
