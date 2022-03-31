<template>
  <div class="pedidocl">
    <ComSabores/>
    <br>
    <ComAdornos/>
  </div>
</template>

<script>
// @ is an alias to /src
import ComAdornos from '@/components/ComAdornos.vue'
import ComSabores from '@/components/ComSabores.vue'


export default {
  name: 'Pedido',
  components: {
    ComAdornos,
    ComSabores
  },
  
}
</script>