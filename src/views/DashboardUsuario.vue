<template>
    <div>
      <b-container>
        <b-row>
          <b-col cols="12 mt-5">
            <h1>Tu Historial Médico</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12 mt-5" style="overflow-x: scroll">
            <table class="table table-hover table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Nombre Médico</th>
                  <th scope="col">Nombre IPS</th>
                  <th scope="col">Anotaciones</th>
                  <th scope="col">Ver</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in historias" :key="index" class="hclist">
                  <th>{{ index+1 }}</th>
                  <th>{{ item.Fecha }}</th>
                  <th>{{ item.NomMedico }}</th>
                  <th>{{ item.NomIps }}</th>
                  <th>{{ item.Anotacion }}</th>
                  <th>
                    <router-link :to="{name: 'EditarHC', params: {id:item.id}}">
                      <button type="button" class="btn btn-info">Detalles</button>
                    </router-link>
                  </th>
                  <th>
                    <button type="button" class="btn btn-warning" @click="eliminarHistoria(item.id)">Eliminar</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="mt-4">
        <b-row>
          <b-col>
            <router-link to="/AgregarHC">
            <button class="btn btn-primary">Agregar nuevo Historial</button>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
            
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
    }
  },
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

<style lang="scss" scoped>
</style>