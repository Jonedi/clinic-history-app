<template>
  <div>
    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="10" md="6">
          <b-img v-bind="imgProps" :src="logo" thumbnail fluid alt="Logo historyApp"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="12" md="6">
          <b-form
            @submit.stop.prevent="loginUsuario({ email: form.email, password: form.password }) "
          >
            <b-form-group id="group_email" class="my-2">
              <b-form-input
                id="email"
                name="email"
                v-model="form.email"
                v-validate="{ required: true, email: true }"
                :state="validateState('email')"
                aria-describedby="email-live-feedback"
                data-vv-as="email"
                type="email"
                placeholder="Email"
              ></b-form-input>
              <b-form-invalid-feedback id="email-live-feedback">
                coloque una dirección de correo electrónica válida
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="group_password" class="my-2">
              <b-form-input
                id="password"
                name="password"
                ref="password"
                v-model="form.password"
                v-validate="{ required: true, min: 6 }"
                :state="validateState('password')"
                aria-describedby="password-live-feedback"
                type="password"
                placeholder="Contraseña"
              ></b-form-input>
              <b-form-invalid-feedback id="password-live-feedback">
                la contraseña debe tener más de 6 caracteres
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="mb-2 d-flex justify-content-start">
              <b-button
                variant="light"
                class="show_password"
                v-on:click="mostrarContraseña()"
                >ver contraseña</b-button
              >
            </div>
            <div class="d-flex justify-content-around">
              <b-button type="submit" variant="primary" :disabled="desactivar">Iniciar Sesión</b-button>
            </div>
            <p v-if="error" class="mt-4">El usuario no ha sido encontrado, por favor <router-link to="/signup">Registrarse</router-link></p>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ItemsMixins } from '@/mixins/ItemsMixins'

export default {
    name: 'Login',
    mixins: [ItemsMixins],
    data: () => ({
      form: {
        email: "",
        password: "",
      },
  }),
  computed: {
    ...mapState(['error']),
    desactivar() {
      return this.form.email.trim()  === '' && this.form.password.trim()  === ''
    }
  },
  methods: {
    ...mapActions(['loginUsuario']),
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    mostrarContraseña() {
      let tipo = document.getElementById('password')
      if (tipo.type == 'password') {
        tipo.type = 'text'
      } else {
        tipo.type = 'password'
      }
    }
  },
}
</script>
