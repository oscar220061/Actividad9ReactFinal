import React from 'react';
import { useCart } from '../../context/contexto';
import ReactDOM from 'react-dom';
import classes from './Cart.module.css';

function Cart({ onClose }) { // Se espera recibir onClose desde el componente padre
  const { cartItems } = useCart();

  const total = cartItems.reduce((prevVal, item) => prevVal + item.price, 0);

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} /> {/* Usar onClose aquí */}
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button> {/* Usar onClose aquí también */}
          <button onClick={onClose}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;