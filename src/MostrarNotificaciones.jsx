// 9. Cree un arreglo notificaciones (strings) y una variable mostrarNotificaciones.
// Si mostrarNotificaciones es true y el arreglo tiene elementos, renderice la
// lista con map. Si no, muestre “No hay notificaciones”. Combine && y
// condicional.


const notificacionesArray = [
    "Tienes un nuevo mensaje",
    "Tu pedido ha sido enviado",
    "Recordatorio: Reunión a las 3 PM",
    "Nueva actualización disponible"
]
function MostrarNotificaciones (){

    let verNotificacion = true

    return (
        <>
            {verNotificacion && notificacionesArray.length > 0 ? 
            
            notificacionesArray.map((notificacion , i)=>(

                <p key={i}> {notificacion}</p>
            )): "!No hay notificaciones!"
        
            }
        </>
    )
} 

export default MostrarNotificaciones