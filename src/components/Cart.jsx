import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Detectar landscape o portrait mobile
  const isLandscape = () =>
    window.innerWidth <= 1024 && window.innerWidth > window.innerHeight;
  const isPortrait = () =>
    window.innerWidth <= 768 && window.innerHeight > window.innerWidth;

  return (
    <>
      {/* Overlay */}
      {(isLandscape() || isPortrait()) && isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Botón flotante para abrir */}
      {(isLandscape() || isPortrait()) && (
        <button
          className="cart-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Cerrar 🛒" : "Abrir 🛒"}
        </button>
      )}

      <div className={`cart ${isOpen ? "open" : "collapsed"}`}>
        <h2>🛒 Carrito</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <p>{item.name}</p>
                  <small>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </small>
                </div>
                <div className="cart-item-controls">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQty(item.id);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increaseQty(item.id);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id);
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="pay-button"
              onClick={(e) => e.stopPropagation()}
            >
              Pagar
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
