<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="(item, index) in historias" :key="index">
        {{ item.id }} - {{ item.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    
  },
  created() {
    this.getHistorias()
  },
  methods: {
    ...mapActions(['getHistorias'])
  },
  computed: {
    ...mapState(['historias'])
  }
}
</script>
