import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  function handleAdd(product) {
    setItems((items) => {
      const exists = items.find((item) => item.product.id === product.id);

      if (exists) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { product, quantity: 1 }];
    });
    console.log([...items, { product, quantity: 1 }]);
  }

  function handleRemove(productId) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <ProductList onAdd={handleAdd} />
      <CartDrawer
        open={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemove}
      />
    </div>
  );
}
