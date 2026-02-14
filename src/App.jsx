import Ejercicio1 from "./Ejercicio1"
import CalcularEdad from "./CalcularEdad"
import MensajeEstado from "./MensajeEstado"
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
    </>
  )
}

export default App
