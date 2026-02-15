import Ejercicio1 from "./Ejercicio1"
import CalcularEdad from "./CalcularEdad"
import MensajeEstado from "./MensajeEstado"
import Productos from "./Productos"
import SaludoUsuario from "./SaludoUsuario"
import Perfil from "./Perfil"
import MostrarNotificaciones from "./MostrarNotificaciones"
import ListaUsuarios from "./ListaUsuarios"
import './App.css'

function App() {


  // app reenderiza el componente y react crea el obj props => luego Ejercicio1 recibe los valores del obj props y se muestra en pantalla la frase
  return (
    <div className="app-container">
      <div className="ejercicio">
        <h2>Ejercicio 1</h2>
        <Ejercicio1  ciudad="Popayan" nombre="Camilo" anio="2026"></Ejercicio1>
      </div>

      <div className="ejercicio">
        <h2>Ejercicio 2 - Calcular Edad</h2>
        <CalcularEdad anioNacimiento={2002}></CalcularEdad>
        <CalcularEdad anioNacimiento={1984}></CalcularEdad>
        <CalcularEdad anioNacimiento={1997}></CalcularEdad>
      </div>

      <div className="ejercicio">
        <h2>Ejercicio 3 - Mensaje Estado</h2>
        <MensajeEstado activo={true}></MensajeEstado>
        <MensajeEstado activo={false}></MensajeEstado>
      </div>

      <div className="ejercicio">
        <h2>Ejercicicio 4 y 5 - Productos</h2>
        <Productos></Productos>
      </div>

      <div className="ejercicio">
        <h2>Ejercicio 6 - Saludo Usuario</h2>
        <SaludoUsuario nombre="Lucas" mensaje="Hola"></SaludoUsuario>
        <SaludoUsuario  mensaje="Hola" nombre="Combinacion 2"></SaludoUsuario>
        <SaludoUsuario  mensaje="Hola" nombre="Combinacion #3"></SaludoUsuario>
      </div>

      <div className="ejercicio">
        <h2>Ejercicio 7 y 8 - Perfil</h2>
        <Perfil nombre="Luis" edad="23" ciudad="Cali"></Perfil>
        <Perfil nombre="Luis" edad="23" ></Perfil>
      </div>

      <div className="ejercicio">
        <h2>Ejercicio 9 Mostrar notificaciones</h2>
          <MostrarNotificaciones></MostrarNotificaciones>
      </div>


      <div className="ejercicio">
        <h2>Ejercicio 10 Tarjeta Usurio</h2>
          <ListaUsuarios></ListaUsuarios>
      </div>
    </div>
  )
}

export default App
