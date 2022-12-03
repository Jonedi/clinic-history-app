<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarHistoria(nombre)">
            <input type="text" v-model="nombre">
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AgregarHC',
    data() {
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarHistoria'])
    }
}
</script>

<style lang="scss">
    
</style>