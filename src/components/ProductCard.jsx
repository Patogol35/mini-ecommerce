import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard
