import React from 'react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className='bg-white shadow sticky top-0 z-10'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='text-2xl font-extrabold text-blue-600'>
            Online Shop
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <input
            placeholder='Search for Products'
            className='hidden sm:block border rounded-lg px-3 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-200'
          />
          <button
            onClick={onOpenCart}
            className='relative bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95'
          >
            Cart
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2'>
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
