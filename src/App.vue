<template>
  <div id="app">
    <b-container v-if="userExist" fluid class="bg-dark">
      <b-row>
        <b-col cols="2" md="4" align-self="start">
          <b-img v-bind="imgNavProps" :src="logoDark" fluid class="d-flex my-2" alt="Logo historyApp"/>
        </b-col>
        <b-col cols="10" md="8" align-self="center">
          <b-nav align="right">
            <b-nav-item v-for="(item, i) in appNav" :key="i" class="bg-white p-2 border border-dark nav-active" active>
              <router-link :to="item.url" class="text-decoration-none hc-fs-nav">
                {{ item.name }}
              </router-link>
            </b-nav-item>
            <b-nav-item class="bg-white border border-dark">
              <button class="btn btn-outline-light text-primary" @click="cerrarSesion">
                Cerrar Sesión
              </button>
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
    <div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters, } from 'vuex'
import { ItemsMixins } from '@/mixins/ItemsMixins'

export default {
  mixins: [ItemsMixins],
  data() {
    return {
      appNav: [
        {'name': 'Perfil', 'url': '/'},
        {'name': 'Historial Médico', 'url': '/dashboard'}
      ],
    }
  },
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['userExist'])
  }
}
</script>

<style lang="scss">
// @import 'node_modules/bootstrap/scss/bootstrap.scss';
// @import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
