<template>
   <h2>Menú de Adornos</h2>
    <ul>
        <li>Decoración con {{$store.state.Adorno1}}...................$40</li>
        <li>Decoración con {{$store.state.Adorno2}}............................$30</li>
        <li>Decoracion con {{$store.state.Adorno3}}............................................$60</li>
        <li>Decoracion con {{$store.state.Adorno4}}....................................$50</li>
    </ul>
</template>

<script>
export default {
  name: 'Adornos',
  props: {  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>