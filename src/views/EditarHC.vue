<template>
    <div>
        <h1>Editar</h1>
        <p>id: {{ historia.id }}</p>
        <p>nombre: {{ historia.nombre }}</p>
        <form @submit.prevent="editarHistoria(historia)">
            <input type="text" v-model="historia.nombre">
            <button>Editar</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getHistoria(this.id)
    },
    methods: {
        ...mapActions(['getHistoria', 'editarHistoria']),
    },
    computed: {
        ...mapState(['historia'])
    }
}
</script>

<style lang="scss">
    
</style>