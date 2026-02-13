// 1. Cree un componente que tenga las variables nombre, ciudad y anio. Muestre
// una frase en JSX usando template string: “Hola, soy ___ de ___ y estamos en
// ___”.
function Ejercicio1 ({nombre, ciudad, anio}){
    console.log(nombre, ciudad, anio)
    return(
        <>
            <p>Hola,soy {nombre} de {ciudad} y estamos en {anio}</p>
        </>
    )
}


export default Ejercicio1