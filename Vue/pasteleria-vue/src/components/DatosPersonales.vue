<template>
    <p>Complete los siguientes Datos para Finalizar su Pedido</p>

    <form>
      <input type="text" id="Nombre" name="Nombre"><br>
        <label for="Nombre">Ingresa Tu Nombre</label><br><br>
        <input type="tel" id="tel1" name="tel1" maxlength="10"><br>
        <label for="tel1">Ingresa tu número Teléfonico</label><br><br>
        <input type="email" name="email1" id="email1"><br>
        <label for="email1">Ingresa tu correo electrónico</label><br><br>
    </form>

</template>

<script>
export default {
  name: 'DatosPersonales',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>