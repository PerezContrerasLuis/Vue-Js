<template>
    <div>
        <h1>Vista de Fotos</h1>
            <router-link :to="{name:'fotos',params : {'id':item}}" 
            v-for=" (item,index) of  fotosArreglo" :key="index">
                <button> foto {{item}} </button>
            </router-link>
        <fotografia />
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
    }
}
</script>