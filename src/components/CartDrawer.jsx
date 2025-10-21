import React from 'react';

export default function CartDrawer({ open, items, onClose, onRemove }) {
  return (
    <div
      className={
        (open ? 'translate-x-0' : 'translate-x-full') +
        ' fixed flex flex-col top-16 right-0 h-[calc(80%-4rem)] w-full sm:w-96  bg-white shadow-xl transform transition-transform rounded-lg '
      }
    >
      <div className='p-4 border-b flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Your Cart</h3>

        <button
          type='button'
          class=' text-red-500 focus:outline-none '
          onClick={onClose}
        >
          <svg
            class='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      <div className='p-4 space-y-4 flex-1 overflow-y-auto h-[calc(100%-120px)]'>
        {items.length === 0 ? (
          <div className='text-center text-gray-500 py-16'>
            Your cart is empty!
          </div>
        ) : (
          items.map((it) => (
            <div key={it.product.id} className='flex items-center gap-3'>
              <img
                src={it.product.image}
                alt={it.product.name}
                className='w-16 h-12 object-cover rounded'
              />
              <div className='flex-1'>
                <div className='font-medium'>{it.product.name}</div>
                <div className='text-sm text-gray-500'>
                  quantity: {it.quantity} × {it.product.price}
                </div>
              </div>
              <div>
                <button
                  onClick={() => onRemove(it.product.id)}
                  className='text-red-500 text-sm'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className='p-4 border-t'>
        <div className='flex items-center justify-between mb-3'>
          <div className='text-gray-600'>Totall</div>
          <div className='font-semibold'>
            ${items.reduce((s, it) => s + it.product.price * it.quantity, 0)}
          </div>
        </div>
        <button className='w-full bg-green-600 text-white py-2 rounded-lg'>
          Purchase
        </button>
      </div>
    </div>
  );
}
