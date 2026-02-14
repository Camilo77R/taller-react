// 6. Cree un componente hijo SaludoUsuario que reciba por props los valores
// mensaje y nombre. Muestre: “{mensaje}, {nombre}”. Llame el componente
// desde el padre con 3 combinaciones distintas.


function SaludoUsuario({mensaje, nombre}){
    return(
        <>
            <h3>  {mensaje}, {nombre} </h3>
        </>
    )
}

export default SaludoUsuario