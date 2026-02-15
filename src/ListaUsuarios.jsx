// 10.Cree un arreglo usuarios con id, nombre, edad, activo. Cree un componente
// hijo TarjetaUsuario que reciba los datos por props (destructurando). En el
// padre: (1) use map para renderizar tarjetas; (2) cree una función
// puedeVerDetalle(usuario) que retorne true si activo && edad >= 18; (3) en la
// tarjeta, muestre un botón “Ver detalle” solo si puedeVerDetalle(usuario) es
// true usando &&; (4) si el nombre está vacío, use `


function TarjetaUsuario ({id, nombre, edad, activo, puedeVer}){

    return (
        <article>
            <h3>{nombre || "Usuario sin nombre"}</h3>
            <p>Edad:  {edad}</p>
            <p>Estado: {activo ? "Activo": "Inactivo"}</p>
            {puedeVer &&  <button>Ver detalles </button>}
        </article>
    )

}

function ListaUsuarios(){
    
const usuarios = [
    {id: 1,nombre: "Ana Garcia",edad: 25,activo: true},
    {id: 2,nombre: "Carlos Lopez",edad: 17,activo: true},
    {id: 3,nombre: "",edad: 30,activo: true},
    {id: 4,nombre: "Maria Rodriguez",edad: 22,activo: false},
    {id: 5,  nombre: "Pedro Sanchez",edad: 35,activo: true }
    ]

    function puedeVerDetalle(usuario){
        return usuario.activo && usuario.edad >= 18
    }


    return(
        <>
            {usuarios.map((usuario)=>(
                <TarjetaUsuario 
                    key={usuario.id}
                    id={usuario.id}
                    nombre={usuario.nombre}
                    edad={usuario.edad}
                    activo={usuario.activo}
                    puedeVer={puedeVerDetalle(usuario)}
                />
            ))}

        </>
    )

}





export default ListaUsuarios 