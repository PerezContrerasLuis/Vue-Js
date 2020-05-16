var app = new Vue({
    el: '#app',
    data:{
        titulo:'Ejemplos de Computed',
        mensaje: 'hola mundo soy luis',
        contador : 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-danger': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 40,
                'bg-primary': this.contador > 40 && this.contador <= 80,
                'bg-success': this.contador > 80,
            }
        }
    }

})