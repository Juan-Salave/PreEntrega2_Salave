import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import alimentos from '../assets/alimentos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState()

  const {id} = useParams()
  
  useEffect(() => {
    const producto = alimentos.find(productoToFind => productoToFind.id === Number(id))
    console.log(producto)
    setProducto(producto)    
  }, [id])
  
  return (producto && <ItemDetail producto={producto} />)
  
}

export default ItemDetailContainer
