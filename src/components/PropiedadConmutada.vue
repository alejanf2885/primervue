<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <label for="">Introduzca número</label>
    <input type="number" v-model="numero">
    <div v-html="evaluarNumero">

    </div>
 
  </div>
</template>

<script>
export default {
    name: 'PropiedadConmutada',
    computed : {


        evaluarNumero(){
            let data = '';
            if(this.numero % 2 == 0) {
                data = "<h4 style='color:green'>Par: "+ this.numero +"</h4>"
            }else {
                data = "<h4 style='color:red'>Impar: "+ this.numero +"</h4>"
            }
            return data;
            
        },
        juegosRojos(){
            let datos = this.juegos;
            let i = 0;
            for(let game in this.juegos){
                let juegosRojos = "<span style='color:red'>" + game+ "</span>";
                datos[i] = juegosRojos;
                i++
            }
            return datos;
        }
    },
    data () {
        return {
            numero: 0,
            juegos: ['Parchis', 'Canicas', 'Luz verde, Luz roja', 'La galleta']
        }
    }
}
</script>

<style>

</style>