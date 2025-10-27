<template>
  <div>
    <h1>Metodos filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num">
            Numero: {{ num }}
            Doble: {{ $filters.getNumeroDoble(num) }}
        </li>
    </ul>
    <ul>
        <li v-for="name in nombres" :key="name">
            Nombre: {{ name }}
            <br>
            Nombre en mayusculas: {{ $filters.mayuscula(name) }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'MetodosFilters',
    data() {
        return {
            numeros: [54,21,31,64,13,62],
            nombres:['Lucia','Diana','Antonio','Carlos']
        }
    }
}
</script>

<style>
    
</style>