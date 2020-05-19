Vue.component('padre',{
    template : 
    `
    <div class="p-5 bg-dark text-white"> contenedor padre {{numero}}
        </br>
        <button class="btn btn-primary" v-on:click="numero++"> + </button>
        </br>
        <hijo :numeroPdre="numero"></hijo>
    </div>
    `,
    data:function(){
        return {
            numero : 10
        }
    }
})