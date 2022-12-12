<template>
    <main>
        
    
        <h3>
            <center> <u>informacion-personal</u></center>
        </h3>
        <hr>
        <nav class="nave">
            <img src="../assets/fot.jpg"   class="img1" width="250" height="250" > <br>
         <h3>Ferney Alexander Figueroa Vasquez</h3>
        </nav>
        
        <nav>
            <br>
            <hr>
            <pre>
            
                <router-link to="/informacion"><img src="@/assets/informacion-personal.png" width="50" height="50" >1.Datos-Personales</router-link>  <router-link to="/informacion" > <img src="@/assets/informacionacademica.png" width="50" height="50"> 2.informacion Personal</router-link>|   <router-link to="/laboral"> <img src="@/assets/laboral.png" width="50" height="50">   3.informacion-laboral</router-link>| <router-link to="/referencias"><img src="@/assets/ref-personal.png" width="50" height="50" >  4.referencias-Personales</router-link>
                
            
             </pre>
        </nav>
        <br>
        <hr>
        <table width="600px" border="4" id="tablacolor">
            <tr>
                <td>Numero de Cedula </td>
                <td><input type="number" maxlength="20" value="1061790550" required="true"
                        placeholder="Ingresa tu Cedula" size=" 70" a> </td>
            </tr>
            <tr>
                <td>Apellidos</td>
                <td><input type="text" maxlength="80" required="true" value="Figueroa Vasquez"
                        placeholder="Ingresa tus apellidos" Size="70"> </td>
            </tr>
            <tr>
                <td>Nombres</td>
                <td><input type="text" maxlength="80" required="true" value="Ferney Alexander"
                        placeholder="Ingresa tus Nombres" Size="70"> </td>
            </tr>
            <tr>
                <td>Direccion</td>
                <td><input type="text" maxlength="80" required="true" value="CARR 7 # 11-29"
                        placeholder="Ingresa tu Direccion" Size="70"> </td>
            </tr>
            <tr>
                <td>Telefono</td>
                <td><input type="number" maxlength="80" required="true" value="3122304465"
                        placeholder="Ingresa tu Telefono" Size="70"> </td>
            </tr>
            <tr>
                <td>Correo</td>
                <td><input type="email" maxlength="80" required="true" value="alezfigueroa@hotmail.com"
                        placeholder="Ingresa tu Correo Electronic@" Size="70"> </td>
            </tr>
            <tr>
                <td>Fotografia</td>
                <td><input type="file" maxlength="50" required="true" placeholder="Sube tu Fotografia" Size="70"> </td>
            </tr>
            <tr>
                <td>Fecha de nacimiento</td>
                <td><input type="date" value="2022-10-18" min="2014-01-01" max="2022-10-31"> <input type="time"
                        value="3:00"> </td>
            </tr>
            <tr>
                <td>Sexo</td>
                <td> masculino<input type="radio"> femenino<input type="radio"> otro<input type="radio"></td>
            </tr>
            <tr>
                <td> <input type="submit"></td>
                <td> <input type="reset"></td>
            </tr>
            
        </table>
      
    </main>

</template>
<script>
export default {
name:'CompoHoja'    

}
</script>
<style scoped>
 .img1{
    border-radius: 150px
 }
 h3{
    color: green
 }
 nav{
   width: auto;
   height:29vh
}
</style>

