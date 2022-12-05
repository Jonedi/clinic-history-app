<template>
    <div>
        <h1 class="mt-5">Agregar Nueva Historia</h1>
        <form @submit.prevent="agregarHistoria({hoy, nomMedico, nomIps, anotacion})">
        <b-container class="mt-5">
            <b-row>
                <b-col cols="6" md="4">
                    <b-form-group
                        id="today-group"
                        label="Fecha actual"
                        label-for="today"
                    >
                        <b-form-datepicker id="today" v-model="hoy" class="mb-2" placeholder="Fecha de Hoy" required />
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
                            v-model="nomMedico"
                            type="text"
                            placeholder="Nombre completo"
                            required
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
                            id="nomIps"
                            v-model="nomIps"
                            type="text"
                            placeholder="Nombre completo IPS"
                            required
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mt-2">
                    <b-form-textarea
                        id="anotación"
                        v-model="anotacion"
                        placeholder="Escriba las notas aquí"
                        rows="10"
                        max-rows="10"
                        required
                    />
                </b-col>
            </b-row>
        </b-container>
        <b-container class="mt-5">
            <b-row>
                <b-col cols="12">
                    <button type="submit" class="btn btn-primary">Guardar Historia</button>
                </b-col>
            </b-row>
        </b-container>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AgregarHC',
    data() {
        return {
            hoy: '',
            nomMedico: '',
            nomIps: '',
            anotacion: '',
        }
    },
    methods: {
        ...mapActions(['agregarHistoria'])
    }
}
</script>

<style lang="scss">
    
</style>