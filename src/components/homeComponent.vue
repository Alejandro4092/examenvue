<template>
    <div class="home">
     <ul>
        <li v-for="cubo in cubos" :key="cubo.id">
            {{ cubo.nombre }} - {{ cubo.precio }}€
            <img :src="cubo.imagen" alt="" style="width:100px">
        </li>
     </ul>
    </div>
</template>

<script>
import ServiceCubo from '../services/service.cubo.js';

const service=new ServiceCubo();
export default {
name: "HomeComponent",

data() {
    return {
        cubos:[]
    }
},mounted() {
    service.getCubos().then(result=>{
        this.cubos=result;
    })
},
methods: {
}
}
</script>

<style>

</style>