<template>
    <main>
        <h3> <center> <u>Referencias Personales</u></center></h3>
    <hr>
    <nav> 
        <pre>
        
            <a href="CompoHoja.vue"> <img src="../assets/informacion-personal.png" width="5%"> 1. Datos Personales  </a>      <a href="FormaCompo.vue" > <img src="../assets/informacionacademica.png"  width="4%"> 2.Informacion Academica</a>      <a href="LaboraCompo.vue"> <img src="../assets/laboral.png" width="5%"> 3.Infromacion Laboral </a>      <a href="RefeCompo.vue"> <img src="../assets/ref-personal.png" width="5%">  4.Referencias Personales</a>
        
        </pre>
    </nav>

    <table width="600px" border="4">
        <tr><td>Nombre1 </td><td><input type="text" maxlength="20" value="Julissa Perdomo"    required="true" placeholder="Nombre" size=" 70"  a> </td></tr>
        <tr><td>nombre2</td><td><input type="text" maxlength="80" required="true" value="Jairo Arteaga" placeholder="Nombre" Size="70"> </td></tr>
       <tr><td>Nombre3</td><td><input type="text" maxlength="80" required="true" value="Sonia Maca" placeholder="Nombre" Size="70"> </td></tr>
       <tr><td>Profecion1</td><td><input type="text" maxlength="80" required="true" value="Profesora" placeholder="Profecion" Size="70"> </td></tr>
       <tr><td>Profecion2</td><td><input type="text" maxlength="80" required="true" value="Bodegero" placeholder="Profecion" Size="70"> </td></tr>
       <tr><td>Profecion3</td><td><input type="text" maxlength="80" required="true"  value="Ingeniera" placeholder="Profecion" Size="70"> </td></tr>
        <tr><td>Parentesco</td><td><input type="text" maxlength="80" required="true" value="familiar" placeholder="Parentesco" Size="70"> </td></tr>
        <tr><td>Parentesco</td><td><input type="text" maxlength="80" required="true" value="familiar" placeholder="Parentesco" Size="70"> </td></tr>
        <tr><td>Parentesco</td><td><input type="text" maxlength="80" required="true" value="Familiar" placeholder="Parentesco" Size="70"> </td></tr>
        <tr><td>Celular</td><td><input type="text" maxlength="80" required="true" value="310335764"  placeholder="Celular" Size="70"> </td></tr>
        <tr><td>Celular</td><td><input type="text" maxlength="80" required="true" value="322847337"  placeholder="Celular" Size="70"> </td></tr>
        <tr><td>Celular</td><td><input type="text" maxlength="80" required="true" value="3122304465" placeholder="Celular" Size="70"> </td></tr>
        <tr><td>Ciudad</td><td><input type="text" maxlength="50" required="true"  value="Popayan" placeholder="Ciudad" Size="70"> </td></tr>
   
    <tr><td> <input type="submit"></td> <td> <input type="reset"></td></tr>
 
   </table>
    </main>
</template>
<script>
export default {
    name:'RefeCompo'
}
</script>
<style scoped>

</style>


