Vue.component('cabezera',{
    data:function(){
        return {
            titulo:'Ejemplo de componente',
            contador:0
        }
    },
    template:`<div>
                <h1>{{titulo}}</h1>
                <hr/>
                <h1>{{contador}}</h1>
                <hr/>
                <button v-on:click="contador++" class="btn btn-primary"> + </button>
            <div>` 
})