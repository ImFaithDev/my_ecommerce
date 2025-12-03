import React from 'react';

function ProductCard({ product, onAdd }) {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition p-3 flex flex-col '>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-100 object-cover rounded-lg mb-3 cursor-pointer'
      />
      <div className='flex-1'>
        <h3 className='font-semibold text-lg'>{product.name}</h3>
        <p className='text-gray-500 mt-1'>Price: ${product.price}</p>
      </div>
      <div className='mt-4'>
        <button
          onClick={() => onAdd(product)}
          className='w-full bg-blue-600 text-white text-xl font-bold py-2 rounded-lg  transition hover:bg-blue-500'
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
