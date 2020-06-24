<template>
  <div id="app">
    <Cabecera />
    <Listas />
    
  </div>
</template>

<script>

import Cabecera from './components/Cabecera.vue'
import Listas from './components/Listas.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Listas
  }
}
</script>

