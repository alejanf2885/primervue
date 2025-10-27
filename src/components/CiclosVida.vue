<template>
  <div>
    <h1>Ciclos de vida y metodos VUE</h1>
    <button @click="cambiarMensaje">{{mensaje}}</button>
  </div>
</template>

<script>
export default {
   name:'CiclosVida',
   data() {
    return {
        mensaje: 'Pulsar'
    }
   },
   methods:{
    cambiarMensaje(){
        this.mensaje =  'PULSADO'
    }
   },
   mounted() {
        console.log('Componnet mounted')
   },
   created() {
        console.log('component created')
   },
   updated() {
        console.log('component updated')
   },
   unmounted() {
    console.log('unmounted')
   }
}
</script>

<style>

</style>