<template>
   <main>
    <h3> <center> <u>informacion-Academica</u></center></h3>
  <hr>
  <nav> 
      <pre>
      
        <a href="CompoHoja.vue"> <img src="../assets/informacion-personal.png" width="5%"> 1. Datos Personales  </a>      <a href="FormaCompo.vue" > <img src="../assets/informacionacademica.png"  width="4%"> 2.Informacion Academica</a>      <a href="LaboraCompo.vue"> <img src="../assets/laboral.png" width="5%"> 3.Infromacion Laboral </a>      <a href="RefeCompo.vue"> <img src="../assets/ref-personal.png" width="5%">  4.Referencias Personales</a>
      
      </pre>
  </nav>


    <table width="600px" border="4">
        <tr><td>Instiitucion </td><td><input type="text" maxlength="20"  value="Regional Cauca"   required="true" placeholder="Instiitucion" size=" 70"  a> </td></tr>
        <tr><td>Titulo</td><td><input type="text" maxlength="80" required="true" value="Tecnico en redes HFC" placeholder="Titulo" Size="70"> </td></tr>
       <tr><td>Nombres</td><td><input type="text" maxlength="80" required="true" value="Ferney Alexander Figueroa Vasquez"  placeholder="Nombres" Size="70"> </td></tr>
       <tr><td>Ciudad</td><td><input type="text" maxlength="80" required="true" value="Popayan" placeholder="Ciudad" Size="70"> </td></tr>
    <tr><td>Año</td><td><input type="number" maxlength="80" required="true" value="2019" placeholder="Año" Size="70"> </td></tr>
   
    <tr><td> <input type="submit"></td> <td> <input type="reset"></td></tr>
 
   </table>
   </main>
</template>
<script>
export default {
    name:'FormaCompo'
}
</script>


