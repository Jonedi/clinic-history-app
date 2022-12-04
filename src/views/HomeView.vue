<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ usuario.email }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HomeView',
    computed: {
        ...mapState(['usuario'])
    }
}
</script>