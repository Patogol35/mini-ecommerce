import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <p>{item.name}</p>
                <small>${item.price.toFixed(2)} x {item.quantity}</small>
              </div>
              <div className="cart-item-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={{ color: 'red' }}>✕</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="pay-button">Pagar</button>
        </>
      )}
    </div>
  )
}

export default Cart
