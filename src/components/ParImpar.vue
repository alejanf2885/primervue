<template>
  <div>
    <input  v-model.number="numero" type="number" />
    <button @click="generarNumero">Generar Numero</button>
    <h2 v-if="numero % 2 == 0">PAR</h2>
    <h2 v-else>IMPAR</h2>
  </div>
</template>

<script>
export default {
  name: "ParImpar",
  data() {
    return {
      numero: Math.floor(Math.random() * 10) + 1,
     
    };
  },
  methods: {
    
    generarNumero() {
      this.numero = Math.floor(Math.random() * 10) + 1
    }
  },
};
</script>

<style></style>
