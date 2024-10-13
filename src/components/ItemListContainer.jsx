import { useEffect, useState } from 'react'
import alimentos from '../assets/alimentos.json'
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {

    const [producto, setProducto] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {

        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(alimentos)
            }, 2000)

            console.log(rej)
        })

        promise.then((producto) => {
            let productsFiltered
            if (categoryId) {
                productsFiltered = producto.filter(a => a.category === categoryId)
            } else {
                productsFiltered = producto
            }
            setProducto(productsFiltered)
        })
        .catch(error => console.log(error))

    }, [categoryId])

    return (

      <div className='container col-9 mt-5'>
          <h1 className="display-3 text-center text-warning mb-5"><i className="fa-solid fa-store m-2"></i> Friut Store</h1>
          <div className='row'>
              {producto.map((producto) => {
                  return (
                      <div key={producto.id} className='container col m-1'>
                          <div className="border-end border-bottom border-warning rounded m-3" style={{ width: 270, height: 385 }}>
                              <img src={producto.imagen} className="card-img-top mb-0 rounded" alt="" style={{ width: 268, height: 260 }} />
                              <div className="card-body pt-0">
                                  <h3 className='text-light mt-2 mb-0'>{producto.nombre}</h3>
                                  <p className=' text-warning mb-2'>Precio: ${producto.precio}</p>
                                  <Link to={`/detail/${producto.id}`} className="btn btn-sm btn-outline-warning mb-0">Ver mas</Link>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
    );
}

export default ItemListContainer;