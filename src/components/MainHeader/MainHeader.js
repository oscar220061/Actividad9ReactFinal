import React, { useState } from 'react';
import { useCart } from '../../context/contexto';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

function MainHeader() {
  const { cartItems } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado del modal

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({cartItems.length})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} />} {/* Pasar el onClose aquí */}
    </>
  );
}

export default MainHeader;