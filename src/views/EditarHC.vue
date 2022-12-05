<template>
    <div>
        <h1 class="mt-5">Detalle de la Historia</h1>
        
        <form @submit.prevent="editarHistoria(historia)" class="mb-5">
        <b-container class="mt-5 mb-5">
            <b-row>
                <b-col cols="6" md="4">
                    <b-form-group
                        id="today-group"
                        label="Fecha actual"
                        label-for="today"
                    >
                        <b-form-datepicker id="today" v-model="historia.Hoy" class="mb-2" placeholder="Fecha de Hoy" required disabled/>
                    </b-form-group>
                </b-col>
                <b-col cols="6" md="4">
                    <b-form-group
                        id="nomMedico-group"
                        label="Nombre del Médico"
                        label-for="nomMedico"
                    >
                        <b-form-input
                            id="nomMedico"
                            v-model="historia.NomMedico"
                            type="text"
                            placeholder="Nombre completo"
                            required
                            disabled
                        />
                    </b-form-group>
                </b-col>
                <b-col cols="6" md="4">
                    <b-form-group
                        id="nomIps-group"
                        label="Nombre de la IPS"
                        label-for="nomIps"
                    >
                        <b-form-input
                            id="nomMedico"
                            v-model="historia.NomIps"
                            type="text"
                            placeholder="Nombre completo IPS"
                            required
                            :disabled="(disabled == 0)"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mt-2">
                    <b-form-textarea
                        id="anotación"
                        v-model="historia.Anotacion"
                        placeholder="Escriba las notas aquí"
                        rows="10"
                        max-rows="10"
                        required
                        :disabled="(disabled == 0)"
                    />
                </b-col>
            </b-row>
        </b-container>
        <b-container class="mt-5">
            <b-row class="justify-content-center">
                <b-col cols="6">
                    <button type="button" class="btn btn-primary mr-3" @click="disabled = (disabled + 1) % 2">Editar Historia</button>
                </b-col>
                <b-col cols="6">
                    <button type="submit" class="btn btn-primary" v-show="disabled">Guardar Historia</button>
                </b-col>
            </b-row>
        </b-container>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id,
            disabled: 0
        }
    },
    created() {
        this.getHistoria(this.id)
    },
    methods: {
        ...mapActions(['getHistoria', 'editarHistoria']),
        disabled() {

        }
    },
    computed: {
        ...mapState(['historia']),
    }
}
</script>

<style lang="scss">
    
</style>