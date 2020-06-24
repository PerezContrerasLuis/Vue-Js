<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="(item,index) of frutas" :key="item.id" @click="aumentar(index)"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{index}}  {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="limpiar"> RESET </button>
  </div>
</template>


<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: "Listas",
  computed: {
      ...mapState(['frutas'])
  },
  methods:{
    ...mapMutations(['aumentar','limpiar'])
  }
};
</script>
