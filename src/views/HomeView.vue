<template>
  <div class="home">
    <b-container class="mt-5">
      <h1 class="text-start">Perfil</h1>
    </b-container>

    <b-container class="bg-secondary bg-opacity-25 py-4">
      <b-row align-h="center">
        <b-col cols="11" md="4">
          <b-img :src="imgDemo" fluid class="d-flex my-2" alt="Logo historyApp"/>
          <button disabled="disabled" class="btn btn-primary">Cambiar Foto de Perfil</button>
        </b-col>
        <b-col cols="11" md="8">
          <b-row>
            <b-col cols="11">
              <h4 class="fw-bold text-start">Datos Personales</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Nombre:</p>
                  <p>{{ datosUsuario.Nombre}}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Apellido:</p>
                  <p>{{ datosUsuario.Apellido }}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Tipo Id.:</p>
                  <p>{{ datosUsuario.TipoId }}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Número Id.:</p>
                  <p>{{ datosUsuario.NumeroId }}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Género:</p>
                  <p>{{ datosUsuario.Genero }}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Teléfono</p>
                  <p>{{ datosUsuario.Telefono }}</p>
                </b-col>
                <b-col cols="6" md="3">
                  <p class="fw-bold">Correo Electrónico</p>
                  <p>{{ usuario.email }}</p>
                </b-col>
                <b-col>
                  <router-link v-show="false" :to="{name: 'EditarHC', params: {id:datosUsuario.id}}">
                    <button class="btn btn-primary">Editar</button>
                  </router-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { ItemsMixins } from '@/mixins/ItemsMixins'

export default {
    name: 'HomeView',
    mixins: [ItemsMixins],
    created(){
      this.getPerfil()
      console.log(this.getPerfil());
    },
    computed: {
        ...mapState(['usuario', 'datosUsuario'])
    },
    methods: {
      ...mapActions(['getPerfil']),
    }
}
</script>