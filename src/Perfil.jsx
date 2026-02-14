// 7. Cree un componente Perfil que reciba { nombre, edad, ciudad } por
// destructuración. Si ciudad viene vacía o undefined, muestre “Ciudad no
// registrada” usando `


function Perfil({nombre, edad, ciudad}){
    if(ciudad === undefined  || ciudad === null){
        ciudad = "ciudad no registrada"
    }

    const message = `Mi nombre es ${nombre}, tengo ${edad} años y soy de ${ciudad}`
    return(
        <>
            <h3> {message} </h3>
        </>
    )
}

export default Perfil;