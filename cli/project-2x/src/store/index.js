import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana' , cantidad :1},
      {nombre: 'Pera' , cantidad : 2},
      {nombre: 'Uva' , cantidad : 3},
      {nombre: 'Mango' , cantidad :4},
      
  ]
  },
  mutations: {
    aumentar(state,index) {
      state.frutas[index].cantidad ++;
    },
    limpiar (state){
      state.frutas.forEach(elemento =>{
        elemento.cantidad = 0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
