<template>
    <main>
        <h3> <center> <u>Referencia Laboral</u></center></h3>
    <hr>
    <nav> 
        <pre>
        
            <a href="CompoHoja.vue"> <img src="../assets/informacion-personal.png" width="5%"> 1. Datos Personales  </a>      <a href="FormaCompo.vue" > <img src="../assets/informacionacademica.png"  width="4%"> 2.Informacion Academica</a>      <a href="LaboraCompo.vue"> <img src="../assets/laboral.png" width="5%"> 3.Infromacion Laboral </a>      <a href="RefeCompo.vue"> <img src="../assets/ref-personal.png" width="5%">  4.Referencias Personales</a>
        </pre>
    </nav>

    <table width="600px" border="4">
        <tr><td>Cargo</td><td><input type="text" maxlength="20"  value="supervisor"  required="true" placeholder="Cargo" size=" 70"  a> </td></tr>
        <tr><td>Fecha inicio</td><td><input type="text" maxlength="80" value="2019-08-15" required="true" placeholder="Fecha  inicio" Size="70"> </td></tr>
       <tr><td>Fecha final</td><td><input type="text" maxlength="80" required="true" value="Indefinido" placeholder="Fecha final" Size="70"> </td></tr>
       <tr><td>Jefe inmediato</td><td><input type="text" maxlength="80" required="true" value="FERNEY FIGUEROA" placeholder="Jefe inmediato" Size="70"> </td></tr>
    <tr><td>Telefono</td><td><input type="text" maxlength="80" required="true" value="3008472620" placeholder="Ingresa tu Telefon" Size="70"> </td></tr>
    <tr><td>Ciudad</td><td><input type="text" maxlength="80" required="true " value="Popayan" placeholder="Ciudad" Size="70"> </td></tr>
    
    <tr><td> <input type="submit"></td> <td> <input type="reset"></td></tr>
 
   </table>
    </main>
</template>
<script>
export default {
    name:'LaboraCampo'
}
</script>
<style scoped>

</style>

