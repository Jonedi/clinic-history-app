<template>
  <div class="home">
    <h1>Inicio</h1>
    <router-link to="/AgregarHC">
      <button>Agregar</button>
    </router-link>
    <ul>
      <li v-for="(item, index) in historias" :key="index">
        {{ item.id }} - {{ item.nombre }}

        <router-link :to="{name: 'EditarHC', params: {id:item.id}}">
          <button>editar</button>
        </router-link>
        <button @click="eliminarHistoria(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    
  },
  created() {
    this.getHistorias()
  },
  methods: {
    ...mapActions(['getHistorias', 'eliminarHistoria'])
  },
  computed: {
    ...mapState(['historias'])
  }
}
</script>
