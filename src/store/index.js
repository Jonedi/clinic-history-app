import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../firebase";
import router from "../router";
// import historias from './historias'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historias: [],
    historia: { id: '', Fecha: '', NomMedico: "", NomIps: '', anotacion: '', hcData: '' },
    datosUsuario: { Nombre: '', Apellido: '', FechaNacimiento: '', Genero: 'null', NumeroId: '', Telefono: '', TipoId: '' },
    usuario: null,
    error: null,
  },
  getters: {
    userExist(state) {
      if (state.usuario === null) {
        return false;
      } else {
        return true;
      }
    },
  },
  mutations: {
    setDatosUsuario(state, payload) {
      state.datosUsuario = payload;
    },
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setHistorias(state, payload) {
      state.historias = payload
    },
    setHistoria(state, payload) {
        state.historia = payload;
    },
    setEliminarHistoria(state, payload) {
        state.historias = state.historias.filter((item) => item.id !== payload);
    },
  },
  actions: {
    crearUsuario({ commit }, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid,
          };

          db.collection(res.user.email).doc('perfil').set({
            Nombre: usuario.name,
            Apellido: usuario.lastName,
            FechaNacimiento: usuario.birdDate,
            TipoId: usuario.idType,
            NumeroId: usuario.idNum,
            Genero: usuario.idGen,
            Telefono: usuario.phone,
          })
          .then((doc) => {
            commit("setUsuario", usuarioCreado);
            router.push("/");
          })
          .catch((e) => console.log(e));
        })
        .catch((e) => {
          console.log(e);
          commit("setError", e.message);
        });
      },
    loginUsuario({ commit }, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          const usuarioLogin = {
            email: res.user.email,
            uid: res.user.uid,
          };
          commit("setUsuario", usuarioLogin);
          router.push("/");
        })
        .catch((e) => {
          // console.log(e);
          commit("setError", e.message);
        });
    },
    cerrarSesion({ commit }) {
      auth.signOut().then(() => {
        router.push("/login");
      });
    },
    detectarUsuario({ commit }, usuario) {
      commit("setUsuario", usuario);
    },
    getPerfil({ commit, state }){
      db.collection(state.usuario.email).doc('perfil').get()
        .then(doc => {
          let dataUsuario = doc.data();
          commit('setDatosUsuario', dataUsuario)
        })
    },
    getHistorias({ commit, state }) {
      const historias = [];
      db.collection(state.usuario.email).where("hcData", "==", true).get()
        .then(res => {
          res.forEach(doc => {
            let historia = doc.data()
            historia.id = doc.id
            historias.push(historia)
          })
        })
        commit('setHistorias', historias)
    },
    getHistoria({ commit, state }, idItem) {
      db.collection(state.usuario.email).doc(idItem).get()
        .then((doc) => {
          console.log(doc.data());
          let historia = doc.data();
          historia.id = doc.id;
          commit("setHistoria", historia);
        });
    },
    editarHistoria({ commit, state }, historia) {
      db.collection(state.usuario.email).doc(historia.id).update({
        Fecha:      historia.Fecha,
        NomMedico:  historia.NomMedico,
        NomIps:     historia.NomIps,
        Anotacion:  historia.Anotacion,
        hcData:     historia.hcData
      })
        .then(() => {
          router.push("/dashboard");
        })
        .catch(e => { console.log(e)});
    },
    agregarHistoria({ commit, state }, dataHistoria) {
      db.collection(state.usuario.email).add({
        Fecha:      dataHistoria.hoy,
        NomMedico:  dataHistoria.nomMedico,
        NomIps:     dataHistoria.nomIps,
        Anotacion:  dataHistoria.anotacion,
        hcData: true
      })
      .then((doc) => {
        console.log(doc.id)
        router.push("/dashboard");
      })
      .catch(e => { console.log(e)});
    },
    eliminarHistoria({ commit, state }, idHistoria) {
      db.collection(state.usuario.email).doc(idHistoria).delete()
        .then(() => {
          commit("setEliminarHistoria", idHistoria);
        });
    },
  },
  modules: {
    // historias
  },
});
