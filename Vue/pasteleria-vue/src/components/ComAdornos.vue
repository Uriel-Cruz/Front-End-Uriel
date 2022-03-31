<template>
    <h2>Selecciona uno o más adornos para tu Pastel</h2>

      <form>
        <input type="checkbox" id="Adorno1" name="Adorno1" value="Chispas">
        <label for="Adorno1">Chispas de Chocolate</label><br>
        <input type="checkbox" id="Adorno2" name="Adorno2" value="Crema">
        <label for="Adorno2">Crema Pastelera</label><br>
        <input type="checkbox" id="Adorno3" name="Adorno3" value="Frutas">
        <label for="Adorno3">Frutas</label><br>
        <input type="checkbox" id="Adorno4" name="Adorno4" value="Mermelada">
        <label for="Adorno4">Mermelada</label><br>
      </form>  

</template>

<script>
export default {
  name: 'ComAdornos',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>