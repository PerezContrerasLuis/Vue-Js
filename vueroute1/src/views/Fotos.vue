<template>
    <div>
        <h1>Vista de Fotos</h1>
            <router-link :to="{name:'fotos',params : {'id':item}}" 
            v-for=" (item,index) of  fotosArreglo" :key="index">
                <button> foto {{item}} </button>
            </router-link>
        <fotografia />
        <button @click="home" > Home  </button>
        <button @click="anterior" > Anterior  </button>
        <button @click="siguiente" > Siguiente  </button>
    </div>
</template>

<script>
import fotografia from "@/components/Fotografia.vue";
export default {
    components: {
        fotografia
    },
    data(){
        return { fotosArreglo : [1,2,3,4]}
    },
    methods:{
        home(){
            this.$router.push('/');
        }, 
        anterior(){
            this.$router.go(-1);
        }, 
        siguiente(){
            this.$router.go(1);
        }
    }
}
</script>