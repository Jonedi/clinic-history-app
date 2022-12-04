<template>
    <div>
        <h1>Dashboard</h1>
            <router-link to="/AgregarHC">
            <button>Agregar</button>
            </router-link>
            <ul>
            <li v-for="(item, index) in historias" :key="index">
                {{ item.id }} - {{ item.nombre }}

                <router-link :to="{name: 'EditarHC', params: {id:item.id}}">
                <button>Editar</button>
                </router-link>
                <button @click="eliminarHistoria(item.id)">Eliminar</button>
            </li>
            </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {},
  created() {
    this.getHistorias();
  },
  methods: {
    ...mapActions(["getHistorias", "eliminarHistoria"]),
  },
  computed: {
    ...mapState(["historias"]),
  },
};
</script>