// 4. Cree un arreglo productos con id, nombre, precio. Use map para renderizar
// tarjetas simples. Requisito: el precio debe mostrarse con el texto “$” y el id
// debe ir como key.

import styles from './Productos.module.css'

const products = [
    {
        id: "001",
        nombre: "Portátil Lenovo",
        precio: 3250000
    },
    {
        id: "002",
        nombre: "Monitor Samsung",
        precio: 1200000
    },
    {
        id: "003",
        nombre: "Teclado Mecánico",
        precio: 250000
    },
    {
        id: "004",
        nombre: "Mouse Inalámbrico",
        precio: 150000
    }
]

function Productos(){

return(
    <div className={styles.container}>
        { products.map((product)=>{
            return (
                <article key={product.id} className={styles.tarjeta}>
                    <h3 className={styles.titulo}>{product.nombre}</h3>
                    <p className={styles.precio}>${product.precio} COP</p>
                </article>
            )
        })}
    </div>
)}

export default Productos