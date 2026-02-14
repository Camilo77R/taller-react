// 7. Cree un componente Perfil que reciba { nombre, edad, ciudad } por
// destructuración. Si ciudad viene vacía o undefined, muestre “Ciudad no
// registrada” usando `


// 8. Cree variables logueado y rol (por ejemplo: "admin", "user"). Muestre: si no
// está logueado → “Inicie sesión”; si está logueado y rol es "admin" → “Panel
// Admin”; si está logueado y rol es "user" → “Panel Usuario”. Use ternario
// anidado o una lógica equivalente.



function Perfil({nombre, edad, ciudad}){
    let rol = "admin"    
    let estaLogueado = true

    const usuarioDelSistema = !estaLogueado ? "Inicie sesión" : 
    rol.toLocaleLowerCase() === "admin" ? "Panel Admin" : 
    rol.toLocaleLowerCase() === "user" ? "Panel Usuario" : 
    "Rol desconocido"

    return(
        <>
            <h3>Mi nombre es {nombre}, tengo {edad} años y soy de {ciudad ? ciudad : "Ciudad no registrada"}</h3> 
        
            <h4>{usuarioDelSistema}</h4>
        </>
    )
}

export default Perfil;