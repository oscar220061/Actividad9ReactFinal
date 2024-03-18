import React from 'react';
import { useCart } from '../../context/contexto';
import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';

function Events() {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();

  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isInCart={cartItems.some((item) => item.id === event.id)}
          onAddToCart={() => addItemToCart(event)}
          onRemoveFromCart={() => removeItemFromCart(event.id)}
        />
      ))}
    </ul>
  );
}

export default Events;