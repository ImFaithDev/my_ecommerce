import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList({ onAdd }) {
  return (
    <section className='max-w-6xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
