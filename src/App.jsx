import Ejercicio1 from "./Ejercicio1"
import CalcularEdad from "./CalcularEdad"
import MensajeEstado from "./MensajeEstado"
import Productos from "./Productos"
import SaludoUsuario from "./SaludoUsuario"

import Perfil from "./Perfil"

function App() {


  // app reenderiza el componente y react crea el obj props => luego Ejercicio1 recibe los valores del obj props y se muestra en pantalla la frase
  return (
    <>
      <Ejercicio1  ciudad="Popayan" nombre="Camilo" anio="2026"></Ejercicio1>

      <CalcularEdad anioNacimiento={2002}></CalcularEdad>
      <CalcularEdad anioNacimiento={1984}></CalcularEdad>
      <CalcularEdad anioNacimiento={1997}></CalcularEdad>


      <MensajeEstado activo={true}></MensajeEstado>
      <MensajeEstado activo={false}></MensajeEstado>


      <Productos></Productos>


      <SaludoUsuario nombre="Lucas" mensaje="Hola"></SaludoUsuario>
      <SaludoUsuario  mensaje="Hola" nombre="Combinacion 2"></SaludoUsuario>
      <SaludoUsuario  mensaje="Hola" nombre="Combinacion #3"></SaludoUsuario>


      <Perfil nombre="Luis" edad="23" ciudad="Cali"></Perfil>
      <Perfil nombre="Luis" edad="23" ></Perfil>
    </>
  )
}

export default App
