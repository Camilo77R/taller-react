// 3. Cree una función mensajeEstado(activo) que devuelva JSX: si activo es true
// retorna un <span> con “Activo”, si es false retorna un <span> con “Inactivo”.
// Use esa función dentro del return principal.


function mensajeEstado (activo){
    return activo ==true ? <span> Activo </span>: <span> Inactivo </span>
}
function MensajeEstado ({activo}){
    return(
        <>
            {mensajeEstado(activo)}
            <br />
        </>
    ) 
}  


export default MensajeEstado
