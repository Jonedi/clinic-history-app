import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        historias: [],
        historia: { id: "", historial: "", Archivos: [] },
    },
    getters: {},
    mutations: {
      setHistorias(state, payload) {
          state.historias = payload;
      },
      setHistoria(state, payload) {
          state.historia = payload;
      },
      setEliminarHistoria(state, payload) {
          state.historias = state.historias.filter((item) => item.id !== payload);
      },
    },
    actions: {
        getHistorias({ commit, state }) {
            const historias = [];
            db.collection(state.usuario.email).doc('historias').get()
              .then(doc => {
                doc.forEach(e => {
                  let historia = e.data();
                  historia.id = e.id;
                  historias.push(historia);
                });
                commit("setHistorias", historias);
              });
          },
          getHistoria({ commit, state }, idItem) {
            db.collection(state.usuario.email).doc('historias').collection(idItem).get()
              .then((doc) => {
                let historia = doc.data();
                historia.id = doc.id;
                commit("setHistoria", historia);
              });
          },
          editarHistoria({ commit, state }, historia) {
            db.collection(state.usuario.email).doc(historia.id).update({
                nombre: historia.nombre,
              })
              .then(() => {
                router.push("/");
              });
          },
          agregarHistoria({ commit, state }, dataHistoria) {
            db.collection(state.usuario.email).doc('historias').collection(dataHistoria.hoy).add({
              Fecha:      dataHistoria.hoy,
              nomMedico:  dataHistoria.nomMedico,
              nomIps:     dataHistoria.nomIps,
              anotacion:  dataHistoria.anotacion
            })
            .then((doc) => {
              router.push("/");
            });
          },
          eliminarHistoria({ commit, state }, idHistoria) {
            db.collection(state.usuario.email).doc(idHistoria).delete()
              .then(() => {
                commit("setEliminarHistoria", idHistoria);
              });
          },
    },
    modules: {}
})