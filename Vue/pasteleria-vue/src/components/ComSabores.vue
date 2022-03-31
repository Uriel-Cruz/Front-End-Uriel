<template>
    <h2>Selecciona uno o más sabores para tu Pastel</h2>

    <form>
        <input type="checkbox" id="Sabor1" name="Sabor1" value="Zanahoria">
        <label for="Sabor1">Zanahoria</label><br>
        <input type="checkbox" id="Sabor2" name="Sabor2" value="Queso">
        <label for="Sabor2">Queso</label><br>
        <input type="checkbox" id="Sabor3" name="Sabor3" value="Arandanos">
        <label for="Sabor3">Arandanos</label><br>
        <input type="checkbox" id="Sabor4" name="Sabor4" value="Fresa">
        <label for="Sabor4">Fresa</label>
        <br>
   </form> 
        
</template>

<script>
export default {
  name: 'ComSabores',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>