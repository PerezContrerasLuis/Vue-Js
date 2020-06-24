<template>
  <div id="app" class= "container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Cabecera />
    <listas />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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

