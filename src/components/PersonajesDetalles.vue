<template>
    <div class="containerr">
        <img class="containerr" :src="infoPersonaje.image" alt="">
        <h1 class="textoo">{{ infoPersonaje.name }}</h1>
        <h3 class="textooo">{{ infoPersonaje.status }} - {{ infoPersonaje.species }}</h3>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name: "PersonajesDetalles",
        props:["personaje"],
        data(){
            return{
                infoPersonaje:[]
            }
        },
        mounted(){
            const id = this.$route.params.id;
            axios.get('https://rickandmortyapi.com/api/character/'+id)
            .then((res)=>{
                console.log(res.data)
                this.infoPersonaje = res.data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
</script>
<style>
.containerr{
    background-color: #8dffd0;
    border-radius: 10px;
    padding: 10px;
}
.textoo{
    color: blue;
}
.textooo{
    color: blueviolet;
}
</style>