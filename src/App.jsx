import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('cart-items'));
    return saved ? saved : [];
  });

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

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
  }

  function handleDecreaseQty(productId) {
    setItems((prev) => {
      return prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
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
        onDecreseQty={handleDecreaseQty}
      />
    </div>
  );
}
