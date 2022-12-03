<template>
  <div>
    <h1>Registro</h1>

    <b-container>
      <b-row align-h="center">
        <b-col cols="12" md="6">
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group id="email" class="my-2">
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
                v-validate="{ required: true, min:8 }"
                :state="validateState('password')"
                aria-describedby="password-live-feedback"
                type="password"
                placeholder="Contraseña"
              ></b-form-input>
              <b-form-invalid-feedback id="password-live-feedback">
                la contraseña debe tener más de 8 caracteres
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="mb-2">
              <b-button variant="light" class="show_password" v-on:click="mostrarContraseña()">ver contraseña</b-button>
            </div>
            <div class="d-flex justify-content-around">
              <b-button type="submit" variant="primary">Registrar</b-button>
            </div>
            
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "registro",
  data: () => ({
    form: {
      email: "",
      password: "",
      cpassword: "",
    },
  }),
  computed: {},
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        alert("Form submitted!");
      });
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
