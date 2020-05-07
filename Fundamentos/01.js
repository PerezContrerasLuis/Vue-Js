//ejemplo de instancia de vue js 

var app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola Mundo de Vue.js',
        frutas:[
            {nombre:'Manzana',cantidad:20},
            {nombre:'Pera',cantidad:10},
            {nombre:'Uva',cantidad:5},
            {nombre:'Melon',cantidad:0},
        ]
    }
})