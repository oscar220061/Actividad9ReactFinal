import React from 'react';
import { CartProvider } from './context/contexto';
import MainHeader from './components/MainHeader/MainHeader';
import Events from './components/Events/Events';

function App() {
  return (
    <CartProvider>
      <MainHeader />
      <main>
        <Events />
      </main>
    </CartProvider>
  );
}

export default App;
