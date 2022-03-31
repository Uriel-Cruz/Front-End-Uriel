<template>
    <h2>Menú</h2>

    <ul>
        <li>Pastel de {{$store.state.Sabor1}}..........................$150</li>
        <li>Pastel de {{$store.state.Sabor2}}....................$100</li>
        <li>Pastel de {{$store.state.Sabor3}}...................$115</li>
        <li>Pastel de {{$store.state.Sabor4}}...........................$115</li>
    </ul>
</template>

<script>
export default {
  name: 'Sabores',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>