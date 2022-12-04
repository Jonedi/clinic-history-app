import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router'
import { auth } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historias: [],
    historia: {nombre: '', id: ''},
    usuario: null,
    error: null,
  },
  getters: {
  },
  mutations: {
    setHistorias(state, payload) {
      state.historias = payload
    },
    setHistoria(state, payload) {
      state.historia = payload
    },
    setEliminarHistoria(state, payload) {
      state.historias = state.historias.filter(item => item.id !== payload)
    },
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getHistorias({commit}) {
      const historias = []
      db.collection('historias').get()
        .then(res => {
          res.forEach(e => {
            let historia = e.data()
            historia.id = e.id
            historias.push(historia)
          });
          commit('setHistorias', historias)
        })
      },
      getHistoria({commit}, idItem) {
      db.collection('historias').doc(idItem).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let historia = doc.data()
        historia.id = doc.id
        commit('setHistoria', historia)
      })
    },
    editarHistoria({commit}, historia) {
      db.collection('historias').doc(historia.id).update({
        nombre:historia.nombre
      })
      .then(() => {
        router.push('/')
      })
    },
    agregarHistoria({commit}, nombreHistoria) {
      db.collection('historias').add({
        nombre: nombreHistoria,
      })
      .then(doc => {
        router.push('/')
      })
    },
    eliminarHistoria({commit, dispatch}, idHistoria) {
      db.collection('historias').doc(idHistoria).delete()
      .then(() => {
        commit('setEliminarHistoria', idHistoria)
      })
    },
    crearUsuario({commit}, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then(res => {
        const usuarioCreado = {
          email: res.user.email,
          uid: res.user.uid,
        }
        commit('setUsuario', usuarioCreado)
        router.push('/')
      })
      .catch(e => {
        console.log(e)
        commit('setError', e.message)
      })
    },
    loginUsuario({commit}, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(res => {
        const usuarioLogin = {
          email: res.user.email,
          uid: res.user.uid,
        }
        commit('setUsuario', usuarioLogin)
        router.push('/')
      })
      .catch  (e => {
        console.log(e)
        commit('setError', e.message)
      })
    },
    cerrarSesion({commit}) {
      auth.signOut()
      .then(() => {router.push('/login')})
    },
    detectarUsuario({commit}, usuario) {
      commit('setUsuario', usuario)
    }
  },
  modules: {
  }
})
