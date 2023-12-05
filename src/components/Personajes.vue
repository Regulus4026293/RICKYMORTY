<template>
    <div id="divguay">
        <li @click="informacionPersonaje"><a>{{ personaje.name }}</a></li>
    </div>
</template>

<script>
    export default{
        props:["personaje"],
        methods:{
            informacionPersonaje(){
                console.log(this.personaje.id);
                this.$router.push("/personaje/" + this.personaje.id)
            }
        }
    }
</script>
<style>
#divguay{
    background-color: #8389ff;
}
</style>