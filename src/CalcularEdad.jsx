// 2. Cree una función calcularEdad(anioNacimiento) que retorne la edad
// aproximada. Luego muestre en pantalla el resultado para 3 años de
// nacimiento distintos.

function CalcularEdad(props){
    const {anioNacimiento} = props
 
    // const edadAproximada = 2026 - anioNacimiento //Forma1 
    const edadAproximada = new Date().getFullYear() - anioNacimiento // forma con Date()
    console.log(edadAproximada);
    return(
        <>
            <p>Edad apoximada es: {edadAproximada} años </p> 
        </>
    )
}

export default CalcularEdad