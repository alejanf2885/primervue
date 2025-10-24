<template>
  <div class="">
    <h1>Mi primer vue de viernes !!!!</h1>
    <h2>Su nombre es {{ nombre }}</h2>
  </div>
</template>


<script>
export default {
    name : 'HolaMundo',
    data() {

        return {
            nombre: 'Alumno',
            edad: 25,
            miArray: [],
            objeto: {}
        }
    }
}
</script>

<style>
    @import '../assets/css/estilos.css';

</style>