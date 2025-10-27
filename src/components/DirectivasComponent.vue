<template>
  <div class="">
    <h1>Directivas</h1>
    <h3>Numero: {{ $data }}</h3>
    <label for="">Introduzca numero</label>
    <input type="number" v-model="numero">
    <h3 v-if="numero > 0">POSITIVO</h3>
    <h3 v-else-if="numero < 0">NEGATIVO</h3>
    <h3 v-else>CERO</h3>
    <ul>
        <li v-for="serie in series" :key="serie">
            {{ serie }}
        </li>
    </ul>
    <label for="">Nueva serie</label>
    <input type="text">
  </div>
</template>

<script>
export default {
    name: 'DirectivasComponent',
    data() {
        return{
            numero: 0,
            nombre: 'aaaa',
            series: ['doc','futu','lerin '],
            serieNueva: '',
        }
    },
    methods: {
        nuevaSerie() {
            
        }
    }
}
</script>

<style>

</style>