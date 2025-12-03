import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

function ProductList({ onAdd }) {
  return (
    <section className='max-w-6xl mx-auto p-6'>
      <h2 className='text-2xl text-gray-500 font-bold mb-4 -mt-4'>Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
