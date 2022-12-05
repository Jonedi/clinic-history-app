<template>
  <div class="pb-5">
    <b-container>
      <b-row align-h="center">
        <b-col cols="10" md="6">
          <b-img v-bind="imgProps" :src="logo" thumbnail fluid alt="Logo historyApp"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-5 mb-5">
      <b-form
        @submit.stop.prevent="crearUsuario({
          email: form.email,
          password: form.password,
          name: form.name,
          lastName: form.lastName,
          birdDate: form.birdDate,
          idType: form.idType,
          idNum: form.idNum,
          idGen: form.idGen,
          phone: form.phone,
        })"
      >
      <b-row align-h="center" v-show="!showForm">
      <!-- <b-row align-h="center"> -->
        <b-col cols="12" md="6">
          <b-form-group id="group_name" class="my-3">
            <b-form-input
              id="name"
              name="name"
              v-model="form.name"
              v-validate="{ required: true,}"
              :state="validateState('name')"
              aria-describedby="name-live-feedback"
              data-vv-as="name"
              type="text"
              placeholder="Nombre(s)"
            />
            <b-form-invalid-feedback id="name-live-feedback">
              Campo requerido, coloque su(s) nombre(s)
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="group_lastName" class="my-3">
            <b-form-input
              id="lastName"
              name="lastName"
              v-model="form.lastName"
              v-validate="{ required: true,}"
              :state="validateState('lastName')"
              aria-describedby="lastName-live-feedback"
              data-vv-as="lastName"
              type="text"
              placeholder="Apellido(s)"
            />
            <b-form-invalid-feedback id="lastName-live-feedback">
              Campo requerido, coloque su(s) Apellido(s)
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="group_email" class="my-3">
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
            />
            <b-form-invalid-feedback id="email-live-feedback">
              coloque una dirección de correo electrónica válida
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="group_password" class="my-3">
            <b-form-input
              id="password"
              name="password"
              v-model="form.password"
              v-validate="{ required: true, min:6 }"
              :state="validateState('password')"
              aria-describedby="password-live-feedback"
              data-vv-as="password"
              type="password"
              placeholder="Contraseña"
            />
            <b-form-invalid-feedback id="password-live-feedback">
              la contraseña debe tener más de 6 caracteres
            </b-form-invalid-feedback>
          </b-form-group>
          <div class="mb-2 d-flex justify-content-start">
            <b-button variant="light" class="show_password" v-on:click="mostrarContraseña()">ver contraseña</b-button>
          </div>
          <div class="d-flex justify-content-around">
            <b-button type="button" variant="primary" :disabled="desactivar" @click="(showForm=true)">Siguiente</b-button>
          </div>
        </b-col>
      </b-row>

      <b-row v-show="showForm" class="mt-2" align-h="center">
      <!-- <b-row class="mt-2 mb-5" align-h="center"> -->
        <b-col cols="10" md="6">
          <div id="group_birdDate" class="mt-3">
            <b-form-datepicker
              id="birdDate"
              name="birdDate"
              size="sm"
              locale="es"
              placeholder="Fecha de Nacimiento"
              v-model="form.birdDate"
              v-validate="{ required: true,}"
              :state="validateState('birdDate')"
              aria-describedby="birdDate-live-feedback"
              data-vv-as="birdDate"
            />
            <b-form-invalid-feedback id="birdDate-live-feedback">
              Campo requerido, Ingrese número de identificación
            </b-form-invalid-feedback>
          </div>
          
          <div class="form-floating mt-3">
            <b-form-select
              id="idType"
              name="idType"
              v-model="form.idType"
              :options="idOptions"
              size="sm"
              class="form-select"
              v-validate="{ required: true }"
              :state="validateState('idType')"
              aria-describedby="idType-live-feedback"
              data-vv-as="idType"
            />
            <label for="floatingSelect">Tipo de Identificación</label>
            <b-form-invalid-feedback id="idType-live-feedback">
              Campo obligatorio. Debe elegir un tipo de Identificación
            </b-form-invalid-feedback>
          </div>
          
          <b-form-group id="group_idNum" class="mt-3">
            <b-form-input
              id="idNum"
              name="idNum"
              v-model="form.idNum"
              v-validate="{ required: true, }"
              :state="validateState('idNum')"
              aria-describedby="idNum-live-feedback"
              data-vv-as="idNum"
              type="text"
              placeholder="Número de Identificación"
            ></b-form-input>
            <b-form-invalid-feedback id="idNum-live-feedback">
              Campo requerido, Ingrese número de identificación
            </b-form-invalid-feedback>
          </b-form-group>

          <div class="form-floating mt-3">
            <b-form-select
              id="idGen"
              name="idGen"
              v-model="form.idGen"
              :options="idGOptions"
              size="sm"
              class="form-select"
              v-validate="{ required: true }"
              :state="validateState('idGen')"
              aria-describedby="idGen-live-feedback"
              data-vv-as="idGen"
            />
            <label for="floatingSelect">Género</label>
            <b-form-invalid-feedback id="idGen-live-feedback">
              Campo requerido,  Debe elegir un género
            </b-form-invalid-feedback>
          </div>

          <b-form-group id="group_phone" class="my-3">
            <b-form-input
              id="phone"
              name="phone"
              v-model="form.phone"
              v-validate="{ required: true, }"
              :state="validateState('phone')"
              aria-describedby="name-live-feedback"
              data-vv-as="phonee"
              type="text"
              placeholder="Teléfono de contacto"
            />
            <b-form-invalid-feedback id="phone-live-feedback">
              Campo requerido, coloque su número de teléfono
            </b-form-invalid-feedback>
          </b-form-group>

          <div class="d-flex justify-content-around">
            <b-button type="submit" variant="primary" :disabled="desactivar">Registrar</b-button>
          </div>
        </b-col>
      </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ItemsMixins } from '@/mixins/ItemsMixins'

export default {
  name: "Registro",
  mixins: [ItemsMixins],
  data: () => ({
    form: {
      name: '',
      lastName: '',
      email: "",
      password: "",
      birdDate: '',
      idType: 0,
      idNum: '',
      idGen: 0,
      phome: ''
    },
    showForm: false,
  }),
  computed: {
    ...mapState(['error']),
    desactivar() {
      return this.form.name.trim()  === '' && this.form.email.trim()  === '' && this.form.password.trim()  === '' 
    }
  },
  methods: {
    ...mapActions(['crearUsuario']),
    /* crearUsuario(item) {
      console.log(item);
    }, */
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
  
};
</script>

<style lang="scss">
.show_password {
  
}
</style>
