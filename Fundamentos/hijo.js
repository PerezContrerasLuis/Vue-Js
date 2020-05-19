Vue.component('hijo',{
    template:
    `
        <div class="p-5 bg-success text-white">Contenedor Hijo {{numeroPdre}}</div>
    `,
    props:['numeroPdre']
})