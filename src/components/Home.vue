<template>
    <div>
      <img src="/public/RickMorty.png" class="logo vue" id="logo" alt="Vue logo" />
      <h1 id="Titulo">Hecho por Saúl</h1>
  </div>
    <h3 class="amarillo">Busqueda por id</h3>
    <input type="number" placeholder="Ingrese el numero (ID) del personaje que desea buscar"
    v-model="search" v-on:keyup.enter="searchData">
    <ul v-show="persSearch != ''">
        <Personajes :personaje="persSearch"></Personajes>
    </ul>

    <h1>Personajes</h1>
    <ul>
        <Personajes v-for="personaje in paginated"
        :key="personaje.id" :personaje="personaje"></Personajes>
    </ul>

    <div class="text-center">
        <a @click="$event=>prev()"> Anterior|  </a>
        <a @click="$event=>next()">  |Siguiente</a>
    </div>
</template>

<script>
    import Personajes from './Personajes.vue'
    import axios from 'axios'
    import swal from 'sweetalert'

    export default{
        name:'App',
        data(){
            return{
                personajes:[],
                currentPage: 1,
                pageSize: 5,
                search: null,
                persSearch:''
            }
        },
        mounted(){
            axios.get('https://rickandmortyapi.com/api/character/')
            .then((res)=>{
                this.personajes = res.data.results
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        components:{
            Personajes,
        },
        computed:{
            indexStart(){
                return (this.currentPage - 1) * this.pageSize
            },
            indexEnd(){
                return this.indexStart + this.pageSize
            },
            paginated(){
                return this.personajes.slice(this.indexStart, this.indexEnd)
            }
        },
        methods:{
            next(){
                this.currentPage++;
            },
            prev(){
                this.currentPage--;
            },
            searchData(){
                if(this.search){
                    axios.get('https://rickandmortyapi.com/api/character/'+this.search)
                    .then((res)=>{
                        console.log(res.data)
                        this.persSearch = res.data
                    })
                }
                else{
                    swal({
    title: "Ey",
    text: "Ingresa un numero",
    icon: "error",
  });
                }
            }
        }
    }
</script>
<style>
.text-center{
    margin: 0%;
    background-color: #3c45f8;
}
.logo {
  height: 5%;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #83ed7aaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #11f08caa);
}
h3{
color: yellow;
}
</style>