<template>
<h2>Información del Pedido</h2>
<div class="info">


    <table BORDER>
        <tr>
            <th>Sabor</th>
            <th>Decoración</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>Queso, Zanahoria</td>
            <td>Chispas de Chocolate</td>
            <td>Uriel</td>
            <td>5547493898</td>
            <td>uriel@cruz.com</td>
        </tr>
        <tr>
            <td>Queso, Fresa</td>
            <td>Crema Pastelera</td>
            <td>Sofia</td>
            <td>5547493845</td>
            <td>uriel@cruz.com</td>
        </tr>
        <tr>
            <td>Zanahoria, Arandanos</td>
            <td>Chispas de Chocolate, Frutas</td>
            <td>Andrea</td>
            <td>554749343</td>
            <td>Andrea@gmail.com</td>
        </tr>
        <tr>
            <td>Fresa, Zanahoria</td>
            <td>Mermelada, Chispas de Chocolate</td>
            <td>Carlos</td>
            <td>5547493757</td>
            <td>Carlos@cruz.com</td>
        </tr>
        <tr>
            <td>Queso, Fresa, Zanahoria</td>
            <td>Chispas de Chocolate, Crema Pastelera</td>
            <td>Luis</td>
            <td>55474937464</td>
            <td>Luis@cruz.com</td>
        </tr>
    </table>
</div>
    
</template>

<script>
export default {
  name: 'InfoPedidos',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
    margin-left: 20%;
    margin-top: 50px;

}
</style>