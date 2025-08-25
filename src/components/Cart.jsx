import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const isLandscape = () =>
    window.innerWidth <= 1024 && window.innerWidth > window.innerHeight;
  const isPortrait = () =>
    window.innerWidth <= 768 && window.innerHeight > window.innerWidth;

  return (
    <>
      {(isLandscape() || isPortrait()) && isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {(isLandscape() || isPortrait()) && (
        <button className="cart-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
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
                  {/* ➖ botón restar */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQty(item.id);
                    }}
                    aria-label="Disminuir"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z" />
                    </svg>
                  </button>

                  <span>{item.quantity}</span>

                  {/* ➕ botón aumentar */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increaseQty(item.id);
                    }}
                    aria-label="Aumentar"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 8 1Z" />
                    </svg>
                  </button>

                  {/* ❌ botón eliminar */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id);
                    }}
                    aria-label="Eliminar"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="pay-button" onClick={(e) => e.stopPropagation()}>
              Pagar
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
