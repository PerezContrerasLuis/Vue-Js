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
        ],
        nuevaFruta:'',
        totalFrutas:0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,
                cantidad:0
            });
            this.nuevaFruta = ''
        }
    },
    computed:{
        sumarFrutas(){
            this.totalFrutas = 0;
            for ( fruta of this.frutas) {
                this.totalFrutas += fruta.cantidad;
            }
            return this.totalFrutas;
        }
    }

})