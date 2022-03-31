<template>
  <div class="home-pasteleria">
    <Sabores/>
    <br>
    <Adornos/>
    <br>
    <button @click="cambiarPage()">Pedir Pastel</button>
    <br>
    <Informacion/>
  </div>
</template>

<script>
// @ is an alias to /src
import Informacion from '@/components/Informacion.vue'
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import router from "../router"

export default {
  name: 'Bienvenida',
  components: {
    Informacion,
    Sabores,
    Adornos
  },
  methods:{
    cambiarPage(){
      router.push('./pedido');
    }
  }
  
}
</script>
