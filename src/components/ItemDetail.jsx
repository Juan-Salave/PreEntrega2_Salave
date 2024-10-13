
const ItemDetail = ({ producto }) => {
    console.log(producto)

    return (
        <div className="container col-4 mt-5">
            <div className="border-end border-bottom border-warning rounded m-4">
                <img className="rounded" src={producto.imagen} alt="" style={{ width: 400, height: 350 }} />
                <h1 className="text-warning">{producto.nombre}</h1>
                <h5 className="text-light">Descripcion: {producto.descripcion}</h5>
                <h5 className="text-light">Categoria: {producto.category}</h5>
                <h5 className="text-light">Stock: {producto.stock}Kg</h5>
                <h4 className="text-light">Precio: <span className="text-warning"> ${producto.precio}</span></h4>
                <a to={`/detail/${producto.id}`} className="btn btn-sm btn-outline-warning mb-4">Agregar al carrito</a>
            </div>
        </div>
    )
}

export default ItemDetail